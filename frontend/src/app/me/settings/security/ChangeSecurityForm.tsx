'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Heading } from '@/components/ui/Heading'

import { TypeUserForm } from '@/types/auth.types'

import { useLanguage } from '@/hooks/useLanguage'

import { useInitialData } from '../(hooks)/useInitialData'
import { useUpdateSettings } from '../(hooks)/useUpdateSettings'
import { GoBack } from '../GoBack'

import styles from './ChangeSecurityForm.module.scss'

export function ChangeSecurityForm() {
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
						? 'Безопасность - Настройки'
						: language === '🇩🇪'
							? 'Sicherheit - Einstellungen'
							: language === '🇨🇳'
								? '安全 - 设置'
								: 'Security - Settings'
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
						? 'Имя'
						: language === '🇩🇪'
							? 'Name'
							: language === '🇨🇳'
								? '名称'
								: 'Name'}
				</p>
				<input
					type='text'
					className={styles.input}
					placeholder={
						language === '🇷🇺'
							? 'Введите новое имя'
							: language === '🇩🇪'
								? 'Geben Sie einen neuen Namen ein'
								: language === '🇨🇳'
									? '输入新名称'
									: 'Enter new name'
					}
					{...register('name')}
				/>
				<p>
					{' '}
					{language === '🇷🇺'
						? 'Почта'
						: language === '🇩🇪'
							? 'E-Mail'
							: language === '🇨🇳'
								? '电子邮件'
								: 'Mail'}
				</p>
				<input
					type='email'
					className={styles.input}
					placeholder={
						language === '🇷🇺'
							? 'Введите новый адрес электронной почты'
							: language === '🇩🇪'
								? 'Geben Sie eine neue E-Mail-Adresse ein'
								: language === '🇨🇳'
									? '输入新电子邮件地址'
									: 'Enter new email address'
					}
					{...register('email', {
						required: 'Email is required!'
					})}
				/>
				<p>
					{' '}
					{language === '🇷🇺'
						? 'Пароль'
						: language === '🇩🇪'
							? 'Passwort'
							: language === '🇨🇳'
								? '密码'
								: 'Password'}
				</p>
				<span>
					<input
						type={isShowPassword}
						className={styles.input}
						placeholder={
							language === '🇷🇺'
								? 'Введите новый пароль'
								: language === '🇩🇪'
									? 'Geben Sie ein neues Passwort ein'
									: language === '🇨🇳'
										? '输入新密码'
										: 'Enter new password'
						}
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
