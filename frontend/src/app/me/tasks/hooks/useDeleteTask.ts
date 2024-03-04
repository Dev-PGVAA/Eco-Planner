import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
	taskTimeManagementService,
	taskTodoService
} from '@/services/task.service'

export function useDeleteTaskTimeManagement() {
	const queryClient = useQueryClient()

	const { mutate: deleteTaskTimeManagement, isPending: isDeletePending } =
		useMutation({
			mutationKey: ['delete task'],
			mutationFn: (id: string) => taskTimeManagementService.deleteTask(id),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['tasks']
				})
			}
		})

	return { deleteTaskTimeManagement, isDeletePending }
}

export function useDeleteTaskTodo() {
	const queryClient = useQueryClient()

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete task'],
		mutationFn: (id: string) => taskTodoService.deleteTask(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { deleteTask, isDeletePending }
}
