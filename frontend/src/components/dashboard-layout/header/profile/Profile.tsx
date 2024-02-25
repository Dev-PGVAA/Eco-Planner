'use client'

import { useProfile } from '@/hooks/useProfile'

import { LogoutButton } from '../../sidebar/LogoutButton'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<div className='grid grid-cols-[auto_50px_30px] animate-pulse'>
					<div className='text-right mr-3'>
						<p className='w-48 h-5 bg-white/20 rounded' />
						<p className='w-48 h-3 bg-white/20 translate-y-2 rounded' />
					</div>

					<div className='w-10 h-10 bg-white/20 rounded'></div>
					<i className='translate-y-1'>
						<LogoutButton />
					</i>
				</div>
			) : (
				<div className='grid grid-cols-[auto_50px_30px] cursor-default'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>

					<div className='w-11 h-11 flex justify-center center text-2xl text-white bg-indigo-800 rounded'>
						{data?.user.name?.charAt(0) || 'A'}
					</div>
					<i className='translate-y-1'>
						<LogoutButton />
					</i>
				</div>
			)}
		</div>
	)
}
