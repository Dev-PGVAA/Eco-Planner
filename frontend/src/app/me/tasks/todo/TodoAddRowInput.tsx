import { type Dispatch, type SetStateAction } from 'react'

import { ITaskTodoResponse } from '@/types/task.types'

import { useLanguage } from '@/hooks/useLanguage'

interface ITodotAddRowInput {
	setItems: Dispatch<SetStateAction<ITaskTodoResponse[] | undefined>>
	setIsAutoFocus: Dispatch<SetStateAction<boolean>>
}

export function TodoAddRowInput({
	setItems,
	setIsAutoFocus
}: ITodotAddRowInput) {
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
					order: prev.length + 1
				}
			]
		})
	}

	return (
		<div>
			<button
				onClick={addRow}
				className='italic opacity-40 text-sm translate-x-2'
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
