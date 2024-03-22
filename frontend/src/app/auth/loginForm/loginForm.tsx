import { useMutation } from '@tanstack/react-query'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Modal } from '@/components/modals/Modal'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { errorCatch } from '@/api/error'

import styles from '../auth.module.scss'

import { authService } from '@/services/auth.service'

const loginForm = () => {
	const [error, setError] = useState('')
	const [isShowPassword, setIsShowPassword] = useState('password')
	const [isOpenModal, setIsOpenModal] = useState(false)

	const ShowPassword = () => {
		if (isShowPassword === 'password') setIsShowPassword('text')
		else setIsShowPassword('password')
	}

	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main('login', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
		onError(error) {
			setError(errorCatch(error))
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<p>Email</p>
				<input
					type='email'
					placeholder='Enter your email'
					className={styles.input}
					{...register('email', {
						required: 'Email is required!'
					})}
				/>
				<p>Password</p>
				<span>
					<input
						type={isShowPassword}
						placeholder='Enter your password'
						className={styles.input}
						id='inputTypePassword'
						{...register('password', {
							required: 'Password is required!'
						})}
					/>
					<i
						className='absolute -translate-x-8 translate-y-1'
						onClick={() => ShowPassword()}
					>
						{isShowPassword === 'password' ? (
							<EyeOff stroke='#828282' />
						) : (
							<Eye stroke='#828282' />
						)}
					</i>
				</span>
				<h5 className='text-red-600 text-sm'>{error}</h5>
				<button>Login</button>
			</form>
			<button
				className={styles.forgotPassword}
				onClick={() => setIsOpenModal(true)}
			>
				Forgot Password?
			</button>
			<br />
			{isOpenModal && (
				<Modal
					type='forgot-password'
					setIsOpenModal={setIsOpenModal}
				/>
			)}
		</>
	)
}

export default loginForm
