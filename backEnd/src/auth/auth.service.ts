import {
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { Response } from 'express'
import { MailService } from 'src/mail/mail.service'
import { PrismaService } from 'src/prisma.service'
import { UserService } from './../user/user.service'
import { AuthLoginDto, AuthRegisterDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
	EXPIRE_DAY_REFRESH_TOKEN = 1
	REFRESH_TOKEN_NAME = 'refresh_token'

	constructor(
		private jwt: JwtService,
		private UserService: UserService,
		private MailService: MailService,
		private prisma: PrismaService
	) {}

	async login(dto: AuthLoginDto) {
		const { password, role, ...user } = await this.validateUser(dto)
		const tokens = this.issueTokens(user.id)

		return {
			user,
			...tokens
		}
	}

	async register(dto: AuthRegisterDto) {
		const oldUserEmail = await this.UserService.getByEmail(dto.email)

		if (oldUserEmail)
			throw new UnauthorizedException('User with this email already exists')

		const { password, role, ...user } = await this.UserService.create(dto)

		const tokens = this.issueTokens(user.id)

		return {
			user,
			...tokens
		}
	}

	async forgotPassword(email: string) {
		const user = await this.UserService.getByEmail(email)

		if (!user) throw new NotFoundException('User not found')

		const VERIFICATION_CODE =
			this.UserService.createRandomVerificationCode(email)

		await this.prisma.user.update({
			where: { email },
			data: { verificationCode: VERIFICATION_CODE }
		})

		const { response } = this.MailService.sendMail(
			email,
			VERIFICATION_CODE,
			'verification-code'
		)

		return response
	}

	async verificationCode(email: string, userCode: string) {
		const user = await this.prisma.user.findUnique({
			where: { email },
			select: { verificationCode: true }
		})

		if (userCode !== user.verificationCode)
			throw new UnauthorizedException('Invalid verification code')
		await this.prisma.user.update({
			where: { email },
			data: { verificationCode: null }
		})

		return { message: 'Verification code is correct' }
	}

	async newPassword(dto: AuthLoginDto) {
		const user = await this.UserService.getByEmail(dto.email)

		if (!user) throw new NotFoundException('User not found')

		await this.UserService.update(user.id, { password: dto.password })

		return { message: 'Password has been changed' }
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
