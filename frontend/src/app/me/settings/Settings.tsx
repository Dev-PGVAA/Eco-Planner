'use client'

import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from './(hooks)/useInitialData'
import { useUpdateSettings } from './(hooks)/useUpdateSettings'
import { SETTINGS_ITEMS } from './settings.data'
import styles from './settings.module.scss'

export function Settings() {
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
