import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import {
	AlertTriangle,
	ChevronLeft,
	HelpCircle,
	LockIcon,
	Mail
} from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthForm } from '@/types/auth.types'

import { errorCatch } from '@/api/error'

import { authService } from '@/services/auth.service'

export function ForgotPassword({ handleClose }: { handleClose: () => void }) {
	const [stepModal, setStepModal] = useState<'email' | 'code' | 'password'>(
		'email'
	)
	const [error, setError] = useState('')
	const [email, setEmail] = useState('')
	const [isShowPassword, setIsShowPassword] = useState(false)

	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(
				stepModal === 'email'
					? 'forgot-password'
					: stepModal === 'code'
						? 'verification-code'
						: 'new-password',
				data
			),
		onSuccess() {
			reset()
			stepModal !== 'password' &&
				setStepModal(stepModal === 'email' ? 'code' : 'password')
			stepModal === 'password' && handleClose()
		},
		onError(error) {
			setError(errorCatch(error))
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		stepModal === 'email' && setEmail(data.email)
		stepModal !== 'email' && (data.email = email)
		mutate(data)
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div
					className={cn(
						'absolute top-1/2 left-1/2 -translate-x-1/2 w-1/4 -translate-y-1/2 bg-[#0e0f0f] p-8 rounded-lg shadow-lg min-w-[224px] duration-300'
					)}
				>
					{stepModal === 'email' && (
						<>
							<i className='grid'>
								<AlertTriangle
									size={90}
									className='block mx-auto mb-3'
									stroke='#e46a62'
								/>
							</i>
							<h2 className='text-center text-xl'>Forgot password</h2>
							<p className='text-sm opacity-50 text-center px-3 mb-3'>
								Enter your email address and we will send you a code.
							</p>
							<div>
								<Mail
									className='absolute translate-y-2 translate-x-3'
									stroke='#e46a62'
								/>
								<input
									className='border-2 border-border rounded-lg pl-10 outline-none w-full bg-transparent h-10 text-sm'
									type='email'
									placeholder='Enter email address'
									{...register('email', {
										required: 'Email is required!'
									})}
								/>
							</div>
						</>
					)}
					{stepModal === 'code' && (
						<>
							<h2 className='text-center text-xl'>Verification Code</h2>
							<p className='text-sm opacity-50 text-center px-3 mb-3'>
								Enter verification code that was sent to your email.
							</p>
							<div>
								<LockIcon
									className='absolute translate-y-2 translate-x-3'
									stroke='#e46a62'
								/>
								<input
									className='border-2 border-border rounded-lg pl-10 outline-none w-full bg-transparent h-10 text-sm'
									type='number'
									placeholder='Enter verification code'
									{...register('code', {
										required: 'Verification code is required!'
									})}
								/>
							</div>
						</>
					)}
					{stepModal === 'password' && (
						<>
							<h2 className='text-center text-xl'>New password</h2>
							<p className='text-sm opacity-50 text-center px-3 mb-3'>
								Enter the new password for your account
							</p>
							<div>
								<LockIcon
									className='absolute translate-y-2 translate-x-3 mt-3'
									stroke='#e46a62'
								/>
								<input
									className='border-2 border-border rounded-lg pl-10 outline-none w-full bg-transparent h-10 text-sm mt-3'
									type={isShowPassword ? 'text' : 'password'}
									placeholder='Enter new password'
									{...register('password', {
										required: 'Verification code is required!'
									})}
								/>
								<LockIcon
									className='absolute translate-y-2 translate-x-3 mt-3'
									stroke='#e46a62'
								/>
								<input
									className='border-2 border-border rounded-lg pl-10 outline-none w-full bg-transparent h-10 text-sm mt-3'
									type={isShowPassword ? 'text' : 'password'}
									placeholder='Repeat new password'
									{...register('repeatPassword', {
										required: 'Verification code is required!'
									})}
								/>
							</div>
							<p
								tabIndex={3}
								onClick={() => setIsShowPassword(!isShowPassword)}
								className='mt-3 text-sm cursor-pointer opacity-50 hover:opacity-100 duration-150'
							>
								{isShowPassword ? 'Hide password' : 'Show password'}
							</p>
						</>
					)}
					<p
						className={cn('text-red-600 text-xs ml-2', error ? 'mt-1' : 'h-0')}
					>
						{error && (
							<>
								<HelpCircle
									className='inline-block mr-1'
									size={20}
								/>
								{error}
							</>
						)}
					</p>
					<button className='bg-[#25b251] w-full rounded-lg mt-5'>
						Submit
					</button>
					<p
						tabIndex={3}
						onClick={() => {
							handleClose()
							setStepModal('email')
						}}
						className='flex w-full items-center justify-center mt-5 text-sm cursor-pointer'
					>
						<ChevronLeft /> Go back to login
					</p>
				</div>
			</form>
		</>
	)
}
