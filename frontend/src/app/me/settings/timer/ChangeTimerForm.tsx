'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from '../(hooks)/useInitialData'
import { useUpdateSettings } from '../(hooks)/useUpdateSettings'
import { GoBack } from '../GoBack'

import styles from './ChangeTimerForm.module.scss'

export function ChangeTimerForm() {
	const [isShowPassword, setIsShowPassword] = useState('password')

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
			<GoBack />
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<p>Work interval (min.): </p>
				<input
					type='number'
					className={styles.input}
					placeholder='Enter work interval (min.): '
					{...register('workInterval', {
						valueAsNumber: true
					})}
				/>
				<p>Break interval (min.): </p>
				<input
					type='number'
					className={styles.input}
					placeholder='Enter break interval (min.): '
					{...register('breakInterval', {
						valueAsNumber: true
					})}
				/>
				<p>Intervals count (max 10): </p>
				<input
					type='number'
					className={styles.input}
					placeholder='Enter intervals count (max 10): '
					{...register('intervalsCount', {
						valueAsNumber: true
					})}
				/>
				<button
					type='submit'
					disabled={isPending}
				>
					Save
				</button>
			</form>
		</>
	)
}
