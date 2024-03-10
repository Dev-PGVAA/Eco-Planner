'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { useLanguage } from '@/hooks/useLanguage'

import { COLUMNS } from '../columns.data'
import { useTaskTimeManagementDnd } from '../hooks/useTaskDnd'
import { useTaskTimeManagement } from '../hooks/useTasks'

import { ListRowParent } from './ListRowParent'
import styles from './ListView.module.scss'

export function ListView() {
	const { items, setItems } = useTaskTimeManagement()
	const { onDragEnd } = useTaskTimeManagementDnd()
	const language: string = useLanguage()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>
						{language === '🇷🇺'
							? 'Задача'
							: language === '🇩🇪'
								? 'Aufgabe'
								: language === '🇨🇳'
									? '任务'
									: 'Task name'}
					</div>
					<div>
						{language === '🇷🇺'
							? 'Срок'
							: language === '🇩🇪'
								? 'Fälligkeitsdatum'
								: language === '🇨🇳'
									? '到期日'
									: 'Due date'}
					</div>
					<div>
						{language === '🇷🇺'
							? 'Приоритет'
							: language === '🇩🇪'
								? 'Priorität'
								: language === '🇨🇳'
									? '优先级'
									: 'Priority'}
					</div>
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
