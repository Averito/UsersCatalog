import { FC, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '@components/Input'
import { useInput } from '@hooks/useInput'
import { AuthLayout } from '@layouts/AuthLayout'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { registerThunk } from '@store/reducers/authReducer/authThunks'

export const Register: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const [email, setEmail] = useInput()
	const [password, setPassword] = useInput()
	const [checkPassword, setCheckPassword] = useInput()

	const [emailError, setEmailError] = useState<string>('')
	const [passwordError, setPasswordError] = useState<string>('')

	const onSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()

		if (!email) {
			setEmailError('Это обязательное поле')
			return setTimeout(() => setEmailError(''), 2000)
		}
		if (password !== checkPassword) {
			setPasswordError('Пароли не совпадают')
			return setTimeout(() => setPasswordError(''), 2000)
		}

		await dispatch(
			registerThunk({
				email,
				password
			})
		)
		navigate('/')
	}

	return (
		<AuthLayout
			onSubmit={onSubmit}
			title='Регистрация'
			buttonText='Зарегистрироваться'
		>
			<Input
				value={email}
				onChange={setEmail}
				label='Электронная почта'
				type='email'
				placeholder='example@mail.ru'
				margin='0 0 16px 0'
				error={emailError}
			/>
			<Input
				type='password'
				value={password}
				onChange={setPassword}
				label='Пароль'
				placeholder='Пароль'
				margin='0 0 16px 0'
			/>
			<Input
				type='password'
				value={checkPassword}
				onChange={setCheckPassword}
				label='Подтвердите пароль'
				placeholder='Подтвердите пароль'
				error={passwordError}
				margin='0 0 24px 0'
			/>
		</AuthLayout>
	)
}
