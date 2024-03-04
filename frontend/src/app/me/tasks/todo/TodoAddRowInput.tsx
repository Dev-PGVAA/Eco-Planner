import { type Dispatch, type SetStateAction } from 'react'

import { ITaskTodoResponse } from '@/types/task.types'

interface ITodotAddRowInput {
	setItems: Dispatch<SetStateAction<ITaskTodoResponse[] | undefined>>
}

export function TodoAddRowInput({ setItems }: ITodotAddRowInput) {
	const addRow = () => {
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
				Add task...
			</button>
		</div>
	)
}
