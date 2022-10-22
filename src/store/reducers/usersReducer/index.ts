import { createSlice } from '@reduxjs/toolkit'
import { User } from '@api/reqresApi/types'
import { getUsersList } from '@store/reducers/usersReducer/usersThunks'
import { uniqueIds } from '@helpers/uniqueIds'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [] as User[],
		currentPage: 1
	},
	reducers: {
		incrementCurrentPage(state) {
			state.currentPage += 1
		}
	},
	extraReducers: builder => {
		builder.addCase(getUsersList.fulfilled, (state, { payload }) => {
			state.users = uniqueIds([...state.users, ...payload])
		})
	}
})

export const usersReducer = usersSlice.reducer
export const { incrementCurrentPage } = usersSlice.actions
