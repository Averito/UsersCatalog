import axios from 'axios'
import {
	User,
	Response,
	LoggedUser,
	LoginAndRegistration,
	PageInfo
} from '@api/reqresApi/types'

const configuringAxios = axios.create({
	baseURL: 'https://reqres.in/api'
})

export const reqresApi = {
	async list(pageInfo: PageInfo) {
		const { page, perPage } = pageInfo

		const response = await configuringAxios.get<Response<User[]>>(
			`/users?page=${page}&per_page=${perPage}`
		)
		return response.data.data
	},
	async get(userId: number) {
		const response = await configuringAxios.get<Response<User>>(
			`/users/${userId}`
		)
		return response.data.data
	},
	async register(user: LoginAndRegistration) {
		const response = await configuringAxios.post<LoggedUser>(`/register`, user)
		return response.data
	},
	async login(user: LoginAndRegistration) {
		const response = await configuringAxios.post<LoggedUser>(`/login`, user)
		return response.data
	}
}
