import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction, useState } from 'react'

import { ITaskTodoResponse } from '@/types/task.types'

import { TodoAddRowInput } from './TodoAddRowInput'
import { TodoRow } from './TodoRow'

interface ITodoRowParent {
	items: ITaskTodoResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskTodoResponse[] | undefined>>
}

export function TodoRowParent({ items, setItems }: ITodoRowParent) {
	const [isAutoFocus, setIsAutoFocus] = useState(false)

	return (
		<Droppable droppableId='todo'>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<Draggable
						draggableId='todo'
						index={0}
					>
						{provided => (
							<div
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
							>
								{items?.map((item, index) => (
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
											>
												<TodoRow
													key={item.id}
													item={item}
													setItems={setItems}
													isAutoFocus={isAutoFocus}
												/>
											</div>
										)}
									</Draggable>
								))}
							</div>
						)}
					</Draggable>
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
