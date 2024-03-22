export interface IAuthForm {
	email: string
	password?: string
	repeatPassword?: string
	name?: string
	code?: string // verification code
}

export interface IUser {
	id: number
	name?: string
	email: string
	role: string

	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
