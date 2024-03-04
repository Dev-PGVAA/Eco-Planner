'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from '../(hooks)/useInitialData'
import { useUpdateSettings } from '../(hooks)/useUpdateSettings'
import { GoBack } from '../GoBack'

import styles from './ChangeSecurityForm.module.scss'

export function ChangeSecurityForm() {
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
				<p>Name</p>
				<input
					type='text'
					className={styles.input}
					placeholder='Enter new name'
					{...register('name')}
				/>
				<p>Email</p>
				<input
					type='email'
					className={styles.input}
					placeholder='Enter new email'
					{...register('email', {
						required: 'Email is required!'
					})}
				/>
				<p>Password</p>
				<span>
					<input
						type={isShowPassword}
						className={styles.input}
						placeholder='Enter new password'
						{...register('password')}
					/>
					<i
						className='absolute -translate-x-10 translate-y-3 cursor-pointer'
						onClick={() => ShowPassword()}
					>
						{isShowPassword === 'password' ? <EyeOff /> : <Eye />}
					</i>
				</span>
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
