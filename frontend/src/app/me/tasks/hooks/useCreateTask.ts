import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
	TypeTaskTimeManagementFormState,
	TypeTaskTodoFormState
} from '@/types/task.types'

import {
	taskTimeManagementService,
	taskTodoService
} from '@/services/task.service'

export function useCreateTaskTimeManagement() {
	const queryClient = useQueryClient()

	const { mutate: createTaskTimeManagement } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (data: TypeTaskTimeManagementFormState) =>
			taskTimeManagementService.createTask(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { createTaskTimeManagement }
}
export function useCreateTaskTodo() {
	const queryClient = useQueryClient()

	const { mutate: createTask } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (data: TypeTaskTodoFormState) =>
			taskTodoService.createTask(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { createTask }
}
