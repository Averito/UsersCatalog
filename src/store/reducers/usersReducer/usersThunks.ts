import { createAsyncThunk } from '@reduxjs/toolkit'
import { reqresApi } from '@api/reqresApi'

export const getUsersList = createAsyncThunk('users/getList', reqresApi.list)
