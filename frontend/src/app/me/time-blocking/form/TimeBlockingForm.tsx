import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { SingleSelect } from '@/components/ui/task-edit/SingleSelect'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import { useLanguage } from '@/hooks/useLanguage'

import { COLORS } from './colors.data'
import { useCreateTimeBlock } from './useCreateTimeBlock'
import { useUpdateTimeBlock } from './useUpdateTimBlock'

export function TimeBlockingForm() {
	const language: string = useLanguage()
	const { register, control, watch, reset, handleSubmit, getValues } =
		useFormContext<TypeTimeBlockFormState>()

	const existsId = watch('id')

	const { updateTimeBlock } = useUpdateTimeBlock(existsId)
	const { createTimeBlock, isPending } = useCreateTimeBlock()

	const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
		const { color, id, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			color: COLORS[COLORS.length - 1],
			duration: 0,
			name: '',
			id: undefined,
			order: 1
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-3/5'
		>
			<Field
				{...register('name', {
					required: true
				})}
				id='name'
				label={
					language === '🇷🇺'
						? 'Введите имя задачи:'
						: language === '🇩🇪'
							? 'Geben Sie den Namen ein:'
							: language === '🇨🇳'
								? '输入名称：'
								: 'Enter name:'
				}
				placeholder={
					language === '🇷🇺'
						? 'Введите имя задачи:'
						: language === '🇩🇪'
							? 'Geben Sie den Namen ein:'
							: language === '🇨🇳'
								? '输入名称：'
								: 'Enter name:'
				}
				extra='mb-4'
			/>

			<Field
				{...register('duration', {
					required: true,
					valueAsNumber: true
				})}
				id='duration'
				label={
					language === '🇷🇺'
						? 'Введите продолжительность (мин.):'
						: language === '🇩🇪'
							? 'Geben Sie die Dauer ein (min.):'
							: language === '🇨🇳'
								? '输入持续时间（分钟）：'
								: 'Enter duration (min.):'
				}
				placeholder={
					language === '🇷🇺'
						? 'Введите продолжительность (мин.):'
						: language === '🇩🇪'
							? 'Geben Sie die Dauer ein (min.):'
							: language === '🇨🇳'
								? '输入持续时间（分钟）：'
								: 'Enter duration (min.):'
				}
				isNumber
				extra='mb-4'
			/>

			<div>
				<span className='inline-block mb-1.5'>
					{language === '🇷🇺'
						? 'Цвет'
						: language === '🇩🇪'
							? 'Farbe'
							: language === '🇨🇳'
								? '颜色'
								: 'Color'}
				</span>
				<Controller
					control={control}
					name='color'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={COLORS.map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || COLORS[COLORS.length - 1]}
							isColorSelect
						/>
					)}
				/>
			</div>

			<Button
				type='submit'
				disabled={isPending}
				className='mt-6'
			>
				{existsId
					? language === '🇷🇺'
						? 'Обновить'
						: language === '🇩🇪'
							? 'Aktualisieren'
							: language === '🇨🇳'
								? '更新'
								: 'Update'
					: language === '🇷🇺'
						? 'Создать'
						: language === '🇩🇪'
							? 'Erstellen'
							: language === '🇨🇳'
								? '创建'
								: 'Create'}
			</Button>
		</form>
	)
}
