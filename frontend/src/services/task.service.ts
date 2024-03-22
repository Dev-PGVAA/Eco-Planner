import type {
	ITaskTimeManagementResponse,
	ITaskTodoResponse,
	TypeTaskTimeManagementFormState,
	TypeTaskTodoFormState
} from '@/types/task.types'

import { axiosWithAuth } from '@/api/interceptors'

class TaskTimeManagementService {
	private BASE_URL = '/user/tasks/time-management'

	async getTasks() {
		const response = await axiosWithAuth.get<ITaskTimeManagementResponse[]>(
			this.BASE_URL
		)
		return response
	}

	async createTask(data: TypeTaskTimeManagementFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateTask(id: string, data: TypeTaskTimeManagementFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTask(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

class TaskTodoService {
	private BASE_URL = '/user/tasks/todo'

	async getTasks() {
		const response = await axiosWithAuth.get<ITaskTodoResponse[]>(this.BASE_URL)
		return response
	}

	async createTask(data: TypeTaskTodoFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateTask(id: string, data: TypeTaskTodoFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTask(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const taskTimeManagementService = new TaskTimeManagementService()

export const taskTodoService = new TaskTodoService()
