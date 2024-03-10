import cn from 'clsx'
import dayjs from 'dayjs'
import { GripVertical, Loader, Trash } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Checkbox from '@/components/ui/checkbox'
import { TransparentField } from '@/components/ui/fields/TransparentField'

import { ITaskTodoResponse, TypeTaskTodoFormState } from '@/types/task.types'

import { useDeleteTaskTodo } from '../hooks/useDeleteTask'
import { useTaskTodoDebounce } from '../hooks/useTaskDebounce'

import styles from './TodoView.module.scss'

interface IListRow {
	item: ITaskTodoResponse
	setItems: Dispatch<SetStateAction<ITaskTodoResponse[] | undefined>>
	isAutoFocus: boolean
}

export function TodoRow({ item, setItems, isAutoFocus }: IListRow) {
	const { register, control, watch } = useForm<TypeTaskTodoFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted
		}
	})

	useTaskTodoDebounce({ watch, itemId: item.id })

	const { deleteTaskTodo, isDeletePending } = useDeleteTaskTodo()

	return (
		<div
			className={cn(
				styles.row,
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div>
				<span>
					<button>
						<GripVertical />
					</button>
					<Controller
						control={control}
						name='isCompleted'
						render={({ field: { value, onChange } }) => (
							<Checkbox
								onChange={onChange}
								checked={value}
							/>
						)}
					/>

					<TransparentField
						{...register('name')}
						isAutoFocus={isAutoFocus}
						onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							if (!e.target.value)
								setTimeout(() => {
									deleteTaskTodo(item.id)
								}, 30000)
						}}
						onBlur={e => {
							if (!e.target.value) {
								deleteTaskTodo(item.id)
								setItems(prev => prev?.slice(0, -1))
							}
						}}
					/>
				</span>
			</div>
			<div>
				<span>{dayjs(item.createdAt).format('DD/MM/YYYY')}</span>
			</div>
			<div>
				<button
					onClick={() =>
						item.id
							? deleteTaskTodo(item.id)
							: setItems(prev => prev?.slice(0, -1))
					}
					className='opacity-50 transition-opacity hover:opacity-100'
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}
