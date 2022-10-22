import { createAsyncThunk } from '@reduxjs/toolkit'

import { reqresApi } from '@api/reqresApi'

export const loginThunk = createAsyncThunk('auth/login', reqresApi.login)
export const registerThunk = createAsyncThunk(
	'auth/registration',
	reqresApi.register
)
