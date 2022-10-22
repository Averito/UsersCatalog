import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@store/reducers/authReducer'
import { usersReducer } from '@store/reducers/usersReducer'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		users: usersReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
