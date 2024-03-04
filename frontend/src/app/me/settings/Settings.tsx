'use client'

import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { useProfile } from '@/hooks/useProfile'

import { useInitialData } from './(hooks)/useInitialData'
import { useUpdateSettings } from './(hooks)/useUpdateSettings'
import { LogoutButton } from './LogoutButton'
import { SETTINGS_ITEMS } from './settings.data'
import styles from './settings.module.scss'

export function Settings() {
	const { data, isLoading } = useProfile()

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

	return (
		<div className='flex flex-wrap justify-center'>
			<div className='grid grid-cols-[auto_30px] w-3/5 my-5'>
				<div className='flex'>
					<div className='w-20 h-20 flex justify-center center text-[52.94px] text-white bg-indigo-800 rounded'>
						{data?.user.name?.charAt(0) || 'A'}
					</div>

					<div className='text-left ml-4'>
						<p className='text-2xl font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-lg opacity-40'>{data?.user.email}</p>
					</div>
				</div>
				<LogoutButton />
			</div>
			{SETTINGS_ITEMS.map(item => (
				<Link
					className={styles.link}
					key={item.link}
					href={item.link}
				>
					<span className='inline-flex translate-y-1'>
						<i className='mr-2'>
							<item.icon />
						</i>
						{item.name}
					</span>
				</Link>
			))}
		</div>
	)
}
