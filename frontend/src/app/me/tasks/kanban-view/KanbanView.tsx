'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { useLanguage } from '@/hooks/useLanguage'

import { COLUMNS } from '../columns.data'
import { useTaskTimeManagementDnd } from '../hooks/useTaskDnd'
import { useTaskTimeManagement } from '../hooks/useTasks'

import { KanbanColumn } from './KanbanColumn'
import styles from './KanbanView.module.scss'
import { translator } from '@/services/translate.service'

export function KanbanView() {
	const { items, setItems } = useTaskTimeManagement()
	const { onDragEnd } = useTaskTimeManagementDnd()
	const { language } = useLanguage()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map(column => (
					<KanbanColumn
						key={column.value}
						value={column.value}
						label={translator(column.label, language)}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
