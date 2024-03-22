import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskTimeManagementDto } from './dto/taskTimeManagement.dto'

@Injectable()
export class TaskTimeManagementService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: string) {
		return this.prisma.taskTimeManagement.findMany({
			where: {
				userId
			}
		})
	}

	async create(dto: TaskTimeManagementDto, userId: string) {
		return this.prisma.taskTimeManagement.create({
			data: {
				...dto,
				user: {
					connect: {
						id: userId
					}
				}
			}
		})
	}

	async update(
		dto: Partial<TaskTimeManagementDto>,
		taskId: string,
		userId: string
	) {
		return this.prisma.taskTimeManagement.update({
			where: {
				userId,
				id: taskId
			},
			data: dto
		})
	}

	async delete(taskId: string) {
		return this.prisma.taskTimeManagement.delete({
			where: {
				id: taskId
			}
		})
	}
}
