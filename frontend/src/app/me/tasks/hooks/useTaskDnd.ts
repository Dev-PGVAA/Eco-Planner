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
		console.log(result)
		if (!result.destination) return

		const destinationRowId = result.destination.index

		if (destinationRowId === result.source.index) return

		updateTask({
			id: result.draggableId,
			data: {
				order: result.destination.index,
				isCompleted: false
			}
		})
	}

	return { onDragEnd }
}
