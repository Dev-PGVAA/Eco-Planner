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
import { translator } from '@/services/translate.service'

export function ChangeTimerForm() {
	const [isShowPassword, setIsShowPassword] = useState('password')
	const { language } = useLanguage()

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
			<Heading title={translator('Timer', language)} />
			<GoBack />
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<p>{translator('Work interval (min.):', language)}</p>
				<input
					type='number'
					className={styles.input}
					placeholder={translator('Enter work interval:', language)}
					{...register('workInterval', {
						valueAsNumber: true
					})}
				/>
				<p>{translator('Break interval (min.):', language)}</p>
				<input
					type='number'
					className={styles.input}
					placeholder={translator('Enter break interval:', language)}
					{...register('breakInterval', {
						valueAsNumber: true
					})}
				/>
				<p>{translator('Intervals count (max 10):', language)}</p>
				<input
					type='number'
					className={styles.input}
					placeholder={translator('Enter intervals count:', language)}
					{...register('intervalsCount', {
						valueAsNumber: true
					})}
				/>
				<button
					type='submit'
					disabled={isPending}
				>
					{translator('Save', language)}
				</button>
			</form>
		</>
	)
}
