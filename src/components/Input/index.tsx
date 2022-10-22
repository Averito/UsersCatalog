import { ChangeEventHandler, FC } from 'react'
import classNames from 'classnames'

import styles from './Input.module.scss'

interface InputProps {
	type?: 'text' | 'password' | 'email'
	value: string
	onChange: ChangeEventHandler<HTMLInputElement>
	label?: string
	placeholder?: string
	error?: string
	width?: string
	margin?: string
}

export const Input: FC<InputProps> = ({
	type = 'text',
	value,
	onChange,
	label = 'Заголовок',
	placeholder = 'Введите текст',
	width = '100%',
	margin = '0',
	error
}) => {
	const wrapperStyle = { width, margin }

	const inputHasError = error ? styles.error : ''

	return (
		<div
			className={classNames(styles.wrapper, inputHasError)}
			style={wrapperStyle}
		>
			<p className={styles.label}>{label}</p>
			<input
				className={styles.input}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<div className={styles.errors}>
				<p className={styles.errorsText}>{error}</p>
			</div>
		</div>
	)
}
