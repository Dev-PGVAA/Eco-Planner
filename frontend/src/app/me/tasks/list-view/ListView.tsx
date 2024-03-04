'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { COLUMNS } from '../columns.data'
import { useTaskTimeManagementDnd } from '../hooks/useTaskDnd'
import { useTaskTimeManagement } from '../hooks/useTasks'

import { ListRowParent } from './ListRowParent'
import styles from './ListView.module.scss'

export function ListView() {
	const { items, setItems } = useTaskTimeManagement()
	const { onDragEnd } = useTaskTimeManagementDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Task name</div>
					<div>Due date</div>
					<div>Priority</div>
					<div></div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map(column => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}
