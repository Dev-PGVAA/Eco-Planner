'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { COLUMNS } from '../columns.data'
import { useTaskTimeManagementDnd } from '../hooks/useTaskDnd'
import { useTaskTimeManagement } from '../hooks/useTasks'

import { KanbanColumn } from './KanbanColumn'
import styles from './KanbanView.module.scss'

export function KanbanView() {
	const { items, setItems } = useTaskTimeManagement()
	const { onDragEnd } = useTaskTimeManagementDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map(column => (
					<KanbanColumn
						key={column.value}
						value={column.value}
						label={column.label}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
