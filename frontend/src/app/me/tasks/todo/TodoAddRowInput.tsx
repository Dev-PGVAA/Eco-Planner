import { type Dispatch, type SetStateAction } from 'react'

import { ITaskTodoResponse } from '@/types/task.types'

import { useLanguage } from '@/hooks/useLanguage'

import { translator } from '@/services/translate.service'

interface ITodotAddRowInput {
	setItems: Dispatch<SetStateAction<ITaskTodoResponse[] | undefined>>
	setIsAutoFocus: Dispatch<SetStateAction<boolean>>
}

export function TodoAddRowInput({
	setItems,
	setIsAutoFocus
}: ITodotAddRowInput) {
	const { language } = useLanguage()

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
					order: prev.length
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
				{translator('Add task...', language)}
			</button>
		</div>
	)
}
