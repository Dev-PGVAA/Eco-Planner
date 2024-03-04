import type { IBase } from './root.types'

export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high',
	urgent = 'urgent',
	critical = 'critical'
}

export interface ITaskTimeManagementResponse extends IBase {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export interface ITaskTodoResponse extends IBase {
	name: string
	order: number
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<
	Omit<ITaskTimeManagementResponse, 'id' | 'updatedAt'>
>
export type TypeTaskTodoFormState = Partial<
	Omit<ITaskTodoResponse, 'id' | 'updatedAt'>
>
