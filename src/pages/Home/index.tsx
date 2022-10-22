import { FC, MouseEventHandler, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'
import arrowDown from '@assets/icons/arrowDown.svg'
import { useAppSelector } from '@hooks/useAppSelector'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { getUsersList } from '@store/reducers/usersReducer/usersThunks'
import { HomeUserCard } from '@pages/Home/components/HomeUserCard'
import { Button } from '@components/Button'
import { incrementCurrentPage } from '@store/reducers/usersReducer'

export const Home: FC = () => {
	const dispatch = useAppDispatch()

	const isAuth = useAppSelector(state => state.auth.isAuth)
	const users = useAppSelector(state => state.users.users)
	const currentPage = useAppSelector(state => state.users.currentPage)

	const pageSize = 5

	const onClickShowMore: MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(incrementCurrentPage())
	}

	useEffect(() => {
		if (!isAuth) return

		const pageInfo = {
			page: currentPage,
			perPage: pageSize
		}

		dispatch(getUsersList(pageInfo))
	}, [currentPage])

	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.headerTitle}>Наша команда</h1>
				<p className={styles.headerText}>
					Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
					ложатся на их плечи, и умеющие находить выход из любых, даже самых
					сложных ситуаций.{' '}
				</p>
			</header>
			{isAuth ? (
				<>
					<main className={styles.main}>
						{users.map(user => (
							<HomeUserCard user={user} key={user.id} />
						))}
					</main>
					<div className={styles.showMoreWrapper}>
						<button className={styles.showMore} onClick={onClickShowMore}>
							Показать ещё
							<img
								className={styles.showMoreIcon}
								src={arrowDown}
								alt='Стрелка вниз'
							/>
						</button>
					</div>
				</>
			) : (
				<div className={styles.authorizeRequired}>
					<p>Требуется авторизоваться</p>
					<div className={styles.authorizeRequiredButtons}>
						<Link to='/register'>
							<Button>Регистрация</Button>
						</Link>
						<Link to='/login'>
							<Button>Вход</Button>
						</Link>
					</div>
				</div>
			)}
		</>
	)
}
