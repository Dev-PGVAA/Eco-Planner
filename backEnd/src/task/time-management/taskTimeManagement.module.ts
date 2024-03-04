import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskTimeManagementController } from './taskTimeManagement.controller'
import { TaskTimeManagementService } from './taskTimeManagement.service'

@Module({
	controllers: [TaskTimeManagementController],
	providers: [TaskTimeManagementService, PrismaService],
	exports: [TaskTimeManagementService]
})
export class TaskTimeManagementModule {}
