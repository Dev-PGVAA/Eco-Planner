import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class TaskTodoDto {
	@IsString()
	@IsOptional()
	name: string

	@IsBoolean()
	@IsOptional()
	isCompleted?: boolean

	@IsString()
	@IsOptional()
	createdAt?: string

	@IsNumber()
	@IsOptional()
	order?: number
}
