import { useNavigate } from 'react-router-dom'
import { FC, MouseEventHandler, useState } from 'react'

import styles from './HomeUserCard.module.scss'
import outlineLike from '@assets/icons/outlineLike.svg'
import filledLike from '@assets/icons/filledLike.svg'
import { User } from '@api/reqresApi/types'
import { useCache } from '@hooks/useCache'
import { useAppSelector } from '@hooks/useAppSelector'

interface Like {
	id: string
}

interface HomeUserCardProps {
	user: User
}

export const HomeUserCard: FC<HomeUserCardProps> = ({ user }) => {
	const navigate = useNavigate()
	const token = useAppSelector(state => state.auth.token)

	const [likes, setLikes] = useState<Like[]>([])
	const [wasLike, setWasLike] = useState<boolean>(false)

	const onExtractCache = (cache: Like[], isCacheEmpty: boolean) => {
		if (isCacheEmpty) return
		setLikes(cache)

		const myLike = cache.find(like => like.id === token)
		if (!myLike) return

		setWasLike(true)
	}

	useCache<Like[]>(likes, `user-${user.id}`, onExtractCache)

	const onClickUserCard: MouseEventHandler<HTMLDivElement> = () => {
		navigate(`/users/${user.id}`)
	}

	const onClickLike: MouseEventHandler<HTMLImageElement> = event => {
		event.stopPropagation()

		if (wasLike) {
			setWasLike(false)
			return setLikes(prevState => prevState.filter(like => like.id !== token))
		}
		setLikes(prevState => [
			...prevState,
			{
				id: token
			}
		])
		setWasLike(true)
	}

	return (
		<article className={styles.wrapper} onClick={onClickUserCard}>
			<img className={styles.avatar} src={user.avatar} alt='аватар' />
			<p className={styles.name}>
				{user.first_name} {user.last_name}
			</p>
			<div className={styles.like}>
				{wasLike ? (
					<img src={filledLike} alt='Лайк' onClick={onClickLike} />
				) : (
					<img src={outlineLike} alt='Лайк' onClick={onClickLike} />
				)}
			</div>
		</article>
	)
}
