import { Draggable, Droppable } from '@hello-pangea/dnd'
import { type Dispatch, type SetStateAction, useState } from 'react'

import type { ITaskTimeManagementResponse } from '@/types/task.types'

import { FILTERS } from '../columns.data'
import { filterTasksByTime } from '../filter-tasks'

import { KanbanAddCardInput } from './KanbanAddCardInput'
import { KanbanCard } from './KanbanCard'
import styles from './KanbanView.module.scss'

interface IKanbanColumn {
	value: string
	label: string
	items: ITaskTimeManagementResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskTimeManagementResponse[] | undefined>>
}

export function KanbanColumn({ value, items, label, setItems }: IKanbanColumn) {
	const [isAutoFocus, setIsAutoFocus] = useState(false)

	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div className={styles.column}>
						<div className={styles.columnHeading}>{label}</div>

						{filterTasksByTime(items, value)?.map((item, index) => (
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
										<KanbanCard
											key={item.id}
											item={item}
											setItems={setItems}
											isAutoFocus={isAutoFocus}
										/>
									</div>
								)}
							</Draggable>
						))}

						{provided.placeholder}

						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddCardInput
								setItems={setItems}
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
								setIsAutoFocus={setIsAutoFocus}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	)
}
