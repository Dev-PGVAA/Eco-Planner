import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskTodoDto } from './dto/taskTodo.dto'

@Injectable()
export class TaskTodoService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: string) {
		return this.prisma.taskTodo.findMany({
			where: {
				userId
			}
		})
	}

	async create(dto: TaskTodoDto, userId: string) {
		return this.prisma.taskTodo.create({
			data: {
				...dto,
				order: dto.order,
				user: {
					connect: {
						id: userId
					}
				}
			}
		})
	}

	async update(dto: Partial<TaskTodoDto>, taskId: string, userId: string) {
		return this.prisma.taskTodo.update({
			where: {
				userId,
				id: taskId
			},
			data: dto
		})
	}

	async delete(taskId: string) {
		return this.prisma.taskTodo.delete({
			where: {
				id: taskId
			}
		})
	}
}
