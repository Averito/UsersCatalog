import { FC, FormEventHandler, PropsWithChildren } from 'react'

import styles from './AuthLayout.module.scss'
import { Button } from '@components/Button'

interface AuthLayoutProps {
	onSubmit: FormEventHandler<HTMLFormElement>
	title: string
	buttonText: string
}

export const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = ({
	onSubmit,
	buttonText,
	title,
	children
}) => {
	return (
		<div className={styles.auth}>
			<form className={styles.authWindow} onSubmit={onSubmit}>
				<h2 className={styles.authWindowTitle}>{title}</h2>
				{children}
				<Button>{buttonText}</Button>
			</form>
		</div>
	)
}
