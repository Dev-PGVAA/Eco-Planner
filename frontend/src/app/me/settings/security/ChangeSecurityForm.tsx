'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Modal } from '@/components/modals/Modal'
import { Heading } from '@/components/ui/Heading'

import { TypeUserForm } from '@/types/auth.types'

import { useLanguage } from '@/hooks/useLanguage'

import { useInitialData } from '../(hooks)/useInitialData'
import { useUpdateSettings } from '../(hooks)/useUpdateSettings'
import { GoBack } from '../GoBack'

import styles from './ChangeSecurityForm.module.scss'
import { translator } from '@/services/translate.service'

export function ChangeSecurityForm() {
	const [isShowPassword, setIsShowPassword] = useState('password')
	const { language } = useLanguage()
	const [isOpenModal, setIsOpenModal] = useState(false)

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
			<Heading title={translator('Security', language)} />
			<GoBack />
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<p>{translator('Name', language)}</p>
				<input
					type='text'
					className={styles.input}
					placeholder={translator('Enter new name', language)}
					{...register('name')}
				/>
				<p>{translator('Mail', language)}</p>
				<input
					type='email'
					className={styles.input}
					placeholder={translator('Enter new mail', language)}
					{...register('email', {
						required: 'Email is required!'
					})}
				/>
				<p>{translator('Password', language)}</p>
				<span>
					<input
						type={isShowPassword}
						className={styles.input}
						placeholder={translator('Enter new password', language)}
						{...register('password')}
					/>
					<i
						className='absolute -translate-x-10 translate-y-3 cursor-pointer'
						onClick={() => ShowPassword()}
					>
						{isShowPassword === 'password' ? <EyeOff /> : <Eye />}
					</i>
				</span>
				<p onClick={() => setIsOpenModal(true)}>
					{translator('Save', language)}
				</p>
			</form>
			{isOpenModal && (
				<Modal
					type='new-password'
					setIsOpenModal={setIsOpenModal}
				/>
			)}
		</>
	)
}
