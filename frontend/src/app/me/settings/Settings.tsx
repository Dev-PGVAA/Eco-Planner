'use client'

import cn from 'clsx'
import dayjs from 'dayjs'
import Link from 'next/link'

import { useLanguage } from '@/hooks/useLanguage'
import { useProfile } from '@/hooks/useProfile'

import { LogoutButton } from './LogoutButton'
import { SETTINGS_ITEMS } from './settings.data'
import styles from './settings.module.scss'
import { translator } from '@/services/translate.service'

export function Settings() {
	const { data } = useProfile()
	const { language } = useLanguage()

	return (
		<>
			<div className='flex flex-wrap justify-center'>
				<div className='grid grid-cols-[auto_30px] w-3/5 my-5'>
					<div className='flex'>
						<div className='w-20 h-20 flex justify-center center text-[52.94px] text-white bg-indigo-800 rounded'>
							{data?.user.name?.charAt(0) || 'A'}
						</div>

						<div className='text-left ml-4'>
							<p className='text-2xl font-bold -mb-1 flex items-center'>
								{data?.user.name}{' '}
								{data?.user.role !== 'user' && (
									<span
										className={cn(
											'rounded ml-2 py-[1px] px-1 text-[12px]',
											data?.user.role === 'admin' && 'bg-[#146aeab1]',
											data?.user.role === 'creator' && 'bg-[#ea5b14b1]'
										)}
									>
										{data?.user.role}
									</span>
								)}
							</p>
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
							{translator(item.name, language)}
						</span>
					</Link>
				))}
			</div>
			<footer className='absolute w-full grid grid-rows-2 bottom-0 text-xs opacity-40 font-normal text-center pb-5'>
				<div>
					{dayjs().year()} &copy; {translator('With love from', language)}&nbsp;
					<a
						href='https://github.com/Dev-PGVAA'
						target='_blank'
						rel='noreferrer'
						className='hover:text-primary text-brand-300 transition-colors'
					>
						ECO Group.
					</a>
				</div>
				<p>{translator('All rights reserved', language)}.</p>
			</footer>
		</>
	)
}
