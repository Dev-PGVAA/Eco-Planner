import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { startOfDay, subDays } from 'date-fns'
import { AuthRegisterDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	getById(id: string) {
		return this.prisma.user.findUnique({
			where: { id },
			include: { tasks: true }
		})
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email }
		})
	}

	createRandomVerificationCode(email: string) {
		const code = crypto
			.getRandomValues(new Uint32Array(1))[0]
			.toString()
			.slice(0, 6)

		this.prisma.user.update({
			where: { email },
			data: { verificationCode: code }
		})

		return code
	}

	async getProfile(id: string) {
		const profile = await this.getById(id)

		const totalTasks = profile.tasks.length
		const completedTasks = await this.prisma.taskTimeManagement.count({
			where: {
				userId: id,
				isCompleted: true
			}
		})

		const todayStart = startOfDay(new Date())
		const weekStart = startOfDay(subDays(new Date(), 7))

		const todayTasks = await this.prisma.taskTimeManagement.count({
			where: {
				userId: id,
				createdAt: {
					gte: todayStart.toISOString()
				}
			}
		})

		const weekTasks = await this.prisma.taskTimeManagement.count({
			where: {
				userId: id,
				createdAt: {
					gte: weekStart.toISOString()
				}
			}
		})

		const { password, role, ...rest } = profile

		return {
			user: rest,
			statistics: [
				{ value: totalTasks },
				{ value: completedTasks },
				{ value: todayTasks },
				{ value: weekTasks }
			]
		}
	}

	async create(dto: AuthRegisterDto) {
		const user = {
			email: dto.email,
			name: dto.name,
			password: await hash(dto.password)
		}

		return this.prisma.user.create({ data: user })
	}

	async update(id: string, dto: UserDto) {
		let data = dto

		if (dto.password) data = { ...dto, password: await hash(dto.password) }

		return this.prisma.user.update({
			where: { id },
			data,
			select: {
				name: true,
				email: true
			}
		})
	}
}
