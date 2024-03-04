import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskTodoController } from './taskTodo.controller'
import { TaskTodoService } from './taskTodo.service'

@Module({
	controllers: [TaskTodoController],
	providers: [TaskTodoService, PrismaService],
	exports: [TaskTodoService]
})
export class TaskTodoModule {}
