export interface User {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

export interface LoggedUser {
	token: string
}

export interface Response<T> {
	data: T
}

export interface LoginAndRegistration {
	email: string
	password: string
}

export interface PageInfo {
	page: number
	perPage: number
}
