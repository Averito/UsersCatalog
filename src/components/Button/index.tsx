import { FC, MouseEventHandler, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	width?: string
	margin?: string
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	onClick,
	width = '100%',
	margin = '0',
	children
}) => {
	const widthStyle = { width, margin }

	return (
		<button className={styles.button} style={widthStyle} onClick={onClick}>
			{children}
		</button>
	)
}
