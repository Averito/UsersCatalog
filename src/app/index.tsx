import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Register } from '@pages/Register'
import { Login } from '@pages/Login'
import { UserPage } from '@pages/UserPage'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/users/:id' element={<UserPage />} />
			</Routes>
		</BrowserRouter>
	)
}
