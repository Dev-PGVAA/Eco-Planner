'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { useLanguage } from '@/hooks/useLanguage'

import { COLUMNS } from '../columns.data'
import { useTaskTimeManagementDnd } from '../hooks/useTaskDnd'
import { useTaskTimeManagement } from '../hooks/useTasks'

import { ListRowParent } from './ListRowParent'
import styles from './ListView.module.scss'
import { translator } from '@/services/translate.service'

export function ListView() {
	const { items, setItems } = useTaskTimeManagement()
	const { onDragEnd } = useTaskTimeManagementDnd()
	const { language } = useLanguage()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>{translator('Task name', language)}</div>
					<div>{translator('Due date', language)}</div>
					<div>{translator('Priority', language)}</div>
					<div></div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map(column => (
						<ListRowParent
							items={items}
							label={translator(column.label, language)}
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
