import { DropResult } from '@hello-pangea/dnd'

import { FILTERS } from '../columns.data'

import { useUpdateTaskTimeManagement, useUpdateTaskTodo } from './useUpdateTask'

export function useTaskTimeManagementDnd() {
	const { updateTaskTimeManagement } = useUpdateTaskTimeManagement()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumnId = result.destination.droppableId

		if (destinationColumnId === result.source.droppableId) return

		if (destinationColumnId === 'completed') {
			updateTaskTimeManagement({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			})

			return
		}

		const newCreatedAt = FILTERS[destinationColumnId].format()

		updateTaskTimeManagement({
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false
			}
		})
	}

	return { onDragEnd }
}
export function useTaskTodoDnd() {
	const { updateTask } = useUpdateTaskTodo()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumnId = result.destination.droppableId

		if (destinationColumnId === result.source.droppableId) return

		if (destinationColumnId === 'completed') {
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			})

			return
		}

		const newCreatedAt = FILTERS[destinationColumnId].format()

		updateTask({
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false
			}
		})
	}

	return { onDragEnd }
}
