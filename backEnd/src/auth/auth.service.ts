import {
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { Response } from 'express'
import { UserService } from './../user/user.service'
import { AuthLoginDto, AuthRegisterDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
	EXPIRE_DAY_REFRESH_TOKEN = 1
	REFRESH_TOKEN_NAME = 'refresh_token'

	constructor(
		private jwt: JwtService,
		private UserService: UserService
	) {}

	async login(dto: AuthLoginDto) {
		const { password, ...user } = await this.validateUser(dto)
		const tokens = this.issueTokens(user.id)

		return {
			user,
			...tokens
		}
	}

	async register(dto: AuthRegisterDto) {
		const oldUser = await this.UserService.getByEmail(dto.email)

		if (oldUser) throw new UnauthorizedException('User already exists')

		const { password, ...user } = await this.UserService.create(dto)

		const tokens = this.issueTokens(user.id)

		return {
			user,
			...tokens
		}
	}

	private issueTokens(userId: string) {
		const data = { id: userId }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})

		return {
			accessToken,
			refreshToken
		}
	}

	private async validateUser(dto: AuthLoginDto) {
		const user = await this.UserService.getByEmail(dto.email)

		if (!user) throw new NotFoundException('User not found')

		const isValid = await verify(user.password, dto.password)

		if (!isValid) throw new UnauthorizedException('Invalid password')

		return user
	}

	addRefreshTokenToResponse(res: Response, refreshToken: string) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

		res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
			httpOnly: true,
			domain: 'localhost',
			secure: true,
			sameSite: 'none'
		})
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken)
		if (!result) throw new UnauthorizedException('Invalid refresh token')

		const { password, ...user } = await this.UserService.getById(result.id)

		const tokens = this.issueTokens(user.id)

		return {
			user,
			...tokens
		}
	}

	removeRefreshTokenToResponse(res: Response) {
		const expiresIn = new Date()

		res.cookie(this.REFRESH_TOKEN_NAME, '', {
			httpOnly: true,
			domain: 'localhost',
			expires: new Date(0),
			secure: true,
			sameSite: 'none'
		})
	}
}
