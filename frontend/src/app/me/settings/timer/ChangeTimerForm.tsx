'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Heading } from '@/components/ui/Heading'

import { TypeUserForm } from '@/types/auth.types'

import { useLanguage } from '@/hooks/useLanguage'

import { useInitialData } from '../(hooks)/useInitialData'
import { useUpdateSettings } from '../(hooks)/useUpdateSettings'
import { GoBack } from '../GoBack'

import styles from './ChangeTimerForm.module.scss'

export function ChangeTimerForm() {
	const [isShowPassword, setIsShowPassword] = useState('password')
	const language: string = useLanguage()

	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	const ShowPassword = () => {
		if (isShowPassword === 'password') setIsShowPassword('text')
		else setIsShowPassword('password')
	}

	return (
		<>
			<Heading
				title={
					language === '🇷🇺'
						? 'Таймер - Настройки'
						: language === '🇩🇪'
							? 'Timer - Einstellungen'
							: language === '🇨🇳'
								? '计时器 - 设置'
								: 'Timer - Settings'
				}
			/>
			<GoBack />
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<p>
					{' '}
					{language === '🇷🇺'
						? 'Интервал работы (мин.):'
						: language === '🇩🇪'
							? 'Work interval (min.): '
							: language === '🇨🇳'
								? '工作间隔（最小）：'
								: 'Work interval (min.): '}
				</p>
				<input
					type='number'
					className={styles.input}
					placeholder={
						language === '🇷🇺'
							? 'Введите интервал работы (мин.):'
							: language === '🇩🇪'
								? 'Arbeitsintervall (min.):'
								: language === '🇨🇳'
									? '输入工作间隔（分钟）：'
									: 'Enter work interval (min.):'
					}
					{...register('workInterval', {
						valueAsNumber: true
					})}
				/>
				<p>
					{' '}
					{language === '🇷🇺'
						? 'Интервал перерыва (мин.):'
						: language === '🇩🇪'
							? 'Pausenintervall (min.):'
							: language === '🇨🇳'
								? '休息间隔（分钟）：'
								: 'Break interval (minutes):'}
				</p>
				<input
					type='number'
					className={styles.input}
					placeholder={
						language === '🇷🇺'
							? 'Введите интервал перерыва (мин.):'
							: language === '🇩🇪'
								? 'Pausenintervall (min.):'
								: language === '🇨🇳'
									? '输入休息间隔（分钟）：'
									: 'Enter break interval (min.):'
					}
					{...register('breakInterval', {
						valueAsNumber: true
					})}
				/>
				<p>
					{' '}
					{language === '🇷🇺'
						? 'Количество интервалов (макс. 10):'
						: language === '🇩🇪'
							? 'Anzahl der Intervalle (max. 10):'
							: language === '🇨🇳'
								? '间隔数量（最多10）：'
								: 'Intervals count (max 10):'}
				</p>
				<input
					type='number'
					className={styles.input}
					placeholder={
						language === '🇷🇺'
							? 'Введите количество интервалов (макс. 10):'
							: language === '🇩🇪'
								? 'Anzahl der Intervalle (max. 10):'
								: language === '🇨🇳'
									? '输入间隔数量（最多10）：'
									: 'Enter intervals count (max 10):'
					}
					{...register('intervalsCount', {
						valueAsNumber: true
					})}
				/>
				<button
					type='submit'
					disabled={isPending}
				>
					{language === '🇷🇺'
						? 'Сохранить'
						: language === '🇩🇪'
							? 'Speichern'
							: language === '🇨🇳'
								? '保存'
								: 'Save'}
				</button>
			</form>
		</>
	)
}
