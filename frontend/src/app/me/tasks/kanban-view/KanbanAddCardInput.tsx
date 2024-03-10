import { type Dispatch, type SetStateAction } from 'react'

import type { ITaskTimeManagementResponse } from '@/types/task.types'

import { useLanguage } from '@/hooks/useLanguage'

interface IKanbanAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskTimeManagementResponse[] | undefined>>
	setIsAutoFocus: Dispatch<SetStateAction<boolean>>
}

export function KanbanAddCardInput({
	setItems,
	filterDate,
	setIsAutoFocus
}: IKanbanAddCardInput) {
	const language: string = useLanguage()
	const addCard = () => {
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
		<div className='mt-5'>
			<button
				onClick={addCard}
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
