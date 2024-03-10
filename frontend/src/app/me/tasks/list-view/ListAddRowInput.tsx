import { type Dispatch, type SetStateAction } from 'react'

import { ITaskTimeManagementResponse } from '@/types/task.types'

import { useLanguage } from '@/hooks/useLanguage'

import styles from './ListView.module.scss'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskTimeManagementResponse[] | undefined>>
	setIsAutoFocus: Dispatch<SetStateAction<boolean>>
}

export function ListAddRowInput({
	setItems,
	filterDate,
	setIsAutoFocus
}: IListAddRowInput) {
	const language: string = useLanguage()
	const addRow = () => {
		setIsAutoFocus(true)
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			]
		})
	}

	return (
		<div className={styles.addRow}>
			<button
				onClick={addRow}
				className='italic opacity-40 text-sm'
			>
				{language === '🇷🇺'
					? 'Добавить задачу...'
					: language === '🇩🇪'
						? 'Aufgabe hinzufügen...'
						: language === '🇨🇳'
							? '添加任务...'
							: 'Add task...'}
			</button>
		</div>
	)
}
