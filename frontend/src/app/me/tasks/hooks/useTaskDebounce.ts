import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'

import {
	TypeTaskTimeManagementFormState,
	TypeTaskTodoFormState
} from '@/types/task.types'

import { useCreateTaskTimeManagement, useCreateTaskTodo } from './useCreateTask'
import { useUpdateTaskTimeManagement, useUpdateTaskTodo } from './useUpdateTask'

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskTimeManagementFormState>
	itemId: string
}

export function useTaskTimeManagementDebounce({
	watch,
	itemId
}: IUseTaskDebounce) {
	const { createTaskTimeManagement } = useCreateTaskTimeManagement()
	const { updateTaskTimeManagement } = useUpdateTaskTimeManagement()

	const debouncedCreateTask = useCallback(
		debounce((formData: TypeTaskTimeManagementFormState) => {
			createTaskTimeManagement(formData)
		}, 444),
		[]
	)

	// Теперь debouncedUpdateTask будет сохраняться между рендерами, и debounce будет работать как ожидается.
	const debouncedUpdateTask = useCallback(
		debounce((formData: TypeTaskTimeManagementFormState) => {
			updateTaskTimeManagement({ id: itemId, data: formData })
		}, 444),
		[]
	)

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				debouncedUpdateTask({
					...formData,
					priority: formData.priority || undefined
				})
			} else {
				debouncedCreateTask(formData)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [watch(), debouncedUpdateTask, debouncedCreateTask])
}

export function useTaskTodoDebounce({ watch, itemId }: IUseTaskDebounce) {
	const { createTask } = useCreateTaskTodo()
	const { updateTask } = useUpdateTaskTodo()

	const debouncedCreateTask = useCallback(
		debounce((formData: TypeTaskTodoFormState) => {
			createTask(formData)
		}, 444),
		[]
	)

	// Теперь debouncedUpdateTask будет сохраняться между рендерами, и debounce будет работать как ожидается.
	const debouncedUpdateTask = useCallback(
		debounce((formData: TypeTaskTodoFormState) => {
			updateTask({ id: itemId, data: formData })
		}, 444),
		[]
	)

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				debouncedUpdateTask({
					...formData
				})
			} else {
				debouncedCreateTask(formData)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [watch(), debouncedUpdateTask, debouncedCreateTask])
}
