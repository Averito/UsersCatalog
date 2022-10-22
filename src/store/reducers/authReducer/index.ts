import { createSlice } from '@reduxjs/toolkit'

import {
	loginThunk,
	registerThunk
} from '@store/reducers/authReducer/authThunks'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: !!localStorage.getItem('token'),
		token: localStorage.getItem('token') ?? ''
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				localStorage.setItem('token', payload.token)

				state.isAuth = true
				state.token = payload.token
			})
			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				localStorage.setItem('token', payload.token)

				state.isAuth = true
				state.token = payload.token
			})
	}
})

export const authReducer = authSlice.reducer
