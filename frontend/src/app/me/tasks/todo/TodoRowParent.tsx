import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction, useState } from 'react'

import { ITaskTodoResponse } from '@/types/task.types'

import { filterTasksByOrder } from '../filter-tasks'

import { TodoAddRowInput } from './TodoAddRowInput'
import { TodoRow } from './TodoRow'

interface ITodoRowParent {
	items: ITaskTodoResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskTodoResponse[] | undefined>>
}

export function TodoRowParent({ items, setItems }: ITodoRowParent) {
	const [isAutoFocus, setIsAutoFocus] = useState(false)
	const [draggableId, setDraggableId] = useState<string>('0')

	return (
		<Droppable droppableId={draggableId}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{items?.map((item: ITaskTodoResponse, index: number) => (
						<Draggable
							key={item.id}
							draggableId={item.id}
							index={index}
						>
							{provided => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									onDrag={() => setDraggableId(item.id)}
								>
									<TodoRow
										key={item.id}
										item={items && filterTasksByOrder(items)[index]}
										setItems={setItems}
										isAutoFocus={isAutoFocus}
									/>
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}

					{!items?.some(item => !item.id) && (
						<TodoAddRowInput
							setItems={setItems}
							setIsAutoFocus={setIsAutoFocus}
						/>
					)}
				</div>
			)}
		</Droppable>
	)
}
