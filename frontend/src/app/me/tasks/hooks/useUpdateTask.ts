import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
	TypeTaskTimeManagementFormState,
	TypeTaskTodoFormState
} from '@/types/task.types'

import {
	taskTimeManagementService,
	taskTodoService
} from '@/services/task.service'

export function useUpdateTaskTimeManagement(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTaskTimeManagement } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({
			id,
			data
		}: {
			id: string
			data: TypeTaskTimeManagementFormState
		}) => taskTimeManagementService.updateTask(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { updateTaskTimeManagement }
}

export function useUpdateTaskTodo(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTask } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTaskTodoFormState }) =>
			taskTodoService.updateTask(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { updateTask }
}
