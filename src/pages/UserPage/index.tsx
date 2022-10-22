import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserPage.module.scss'
import phoneIcon from '@assets/icons/phone.svg'
import emailIcon from '@assets/icons/email.svg'
import { User } from '@api/reqresApi/types'
import { reqresApi } from '@api/reqresApi'

export const UserPage: FC = () => {
	const params = useParams()
	const [currentUser, setCurrentUser] = useState<User>({} as User)

	useEffect(() => {
		const asyncWrapper = async () => {
			const user = await reqresApi.get(+(params.id as string))
			setCurrentUser(user)
		}
		asyncWrapper()
	}, [])

	return (
		<>
			<header className={styles.header}>
				<img
					className={styles.headerAvatar}
					src={currentUser?.avatar}
					alt='аватар'
				/>
				<div className={styles.headerSecondBlock}>
					<h1 className={styles.headerName}>
						{currentUser?.first_name} {currentUser?.last_name}
					</h1>
					<p className={styles.headerJob}>Партнер</p>
				</div>
			</header>
			<main className={styles.otherInfoWrapper}>
				<div className={styles.otherInfo}>
					<div>
						<p className={styles.otherInfoAbout}>
							Клиенты видят в нем эксперта по вопросам разработки комплексных
							решений финансовых продуктов, включая такие аспекты, как
							организационная структура, процессы, аналитика и ИТ-компоненты. Он
							помогает клиентам лучше понимать структуру рисков их бизнеса,
							улучшать процессы за счет применения новейших технологий и
							увеличивать продажи, используя самые современные аналитические
							инструменты.
						</p>
						<p className={styles.otherInfoAbout}>
							В работе с клиентами недостаточно просто решить конкретную
							проблему или помочь справиться с трудностями. Не менее важно
							уделять внимание обмену знаниями: &quot;Один из самых позитивных
							моментов — это осознание того, что ты помог клиенту перейти на
							совершенно новый уровень компетентности, уверенность в том, что
							после окончания проекта у клиента есть все необходимое, чтобы
							дальше развиваться самостоятельно&quot;.
						</p>
						<p className={styles.otherInfoAbout}>
							Помимо разнообразных проектов для клиентов финансового сектора,
							Сорин ведет активную предпринимательскую деятельность. Он является
							совладельцем сети клиник эстетической медицины в Швейцарии,
							предлагающей инновационный подход к красоте, а также инвестором
							других бизнес-проектов.
						</p>
					</div>
					<div className={styles.otherInfoContacts}>
						<p className={styles.otherInfoContactsItem}>
							<img src={phoneIcon} alt='Телефон' />
							+7 (954) 333-44-55
						</p>
						<p className={styles.otherInfoContactsItem}>
							<img src={emailIcon} alt='Электронная почта' />
							{currentUser?.email}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
