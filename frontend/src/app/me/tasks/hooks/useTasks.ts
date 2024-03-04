import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import {
	ITaskTimeManagementResponse,
	ITaskTodoResponse
} from '@/types/task.types'

import {
	taskTimeManagementService,
	taskTodoService
} from '@/services/task.service'

export function useTaskTimeManagement() {
	const { data } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskTimeManagementService.getTasks()
	})

	const [items, setItems] = useState<ITaskTimeManagementResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}

export function useTasksTodo() {
	const { data } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskTodoService.getTasks()
	})

	const [items, setItems] = useState<ITaskTodoResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
