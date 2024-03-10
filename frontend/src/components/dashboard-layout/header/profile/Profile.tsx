'use client'

import cn from 'clsx'

import { useProfile } from '@/hooks/useProfile'

import styles from './profile.module.scss'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div
			className='absolute top-big-layout right-big-layout'
			id='profile'
		>
			{isLoading ? (
				<div
					className={cn(
						'grid grid-cols-[auto_50px] animate-pulse',
						styles.profile
					)}
				>
					<div className='text-right mr-3'>
						<p className='w-48 h-5 rounded' />
						<p className='w-48 h-3 translate-y-2 rounded' />
					</div>

					<div className='w-10 h-10 rounded'></div>
				</div>
			) : (
				<div className='flex cursor-default'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>

					<div className='w-11 h-11 flex justify-center center text-2xl text-white bg-indigo-800 rounded'>
						{data?.user.name?.charAt(0) || 'A'}
					</div>
				</div>
			)}
		</div>
	)
}
