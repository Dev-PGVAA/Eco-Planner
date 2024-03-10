import cn from 'clsx'
import { GripVertical, Loader, Trash } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Checkbox from '@/components/ui/checkbox'
import { TransparentField } from '@/components/ui/fields/TransparentField'
import { SingleSelect } from '@/components/ui/task-edit/SingleSelect'
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker'

import type {
	ITaskTimeManagementResponse,
	TypeTaskFormState
} from '@/types/task.types'

import { useDeleteTaskTimeManagement } from '../hooks/useDeleteTask'
import { useTaskTimeManagementDebounce } from '../hooks/useTaskDebounce'

import styles from './ListView.module.scss'

interface IListRow {
	item: ITaskTimeManagementResponse
	setItems: Dispatch<SetStateAction<ITaskTimeManagementResponse[] | undefined>>
	isAutoFocus: boolean
}

export function ListRow({ item, setItems, isAutoFocus }: IListRow) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})

	useTaskTimeManagementDebounce({ watch, itemId: item.id })

	const { deleteTaskTimeManagement, isDeletePending } =
		useDeleteTaskTimeManagement()

	return (
		<div
			className={cn(
				styles.row,
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div>
				<span className='inline-flex items-center gap-2.5 w-full'>
					<button aria-describedby='todo-item'>
						<GripVertical className={styles.grip} />
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
									deleteTaskTimeManagement(item.id)
								}, 30000)
						}}
						onBlur={e => {
							if (!e.target.value) {
								deleteTaskTimeManagement(item.id)
								setItems(prev => prev?.slice(0, -1))
							}
						}}
					/>
				</span>
			</div>
			<div className={styles.date}>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div className={styles.capitalize}>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['critical', 'urgent', 'high', 'medium', 'low'].map(
								item => ({
									value: item,
									label: item
								})
							)}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div>
				<button
					onClick={() =>
						item.id
							? deleteTaskTimeManagement(item.id)
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
