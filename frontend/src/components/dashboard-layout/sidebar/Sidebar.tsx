'use client'

import cn from 'clsx'
import { ArrowLeftToLine, GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect } from 'react'

import { COLORS } from '@/constants/color.constants'

import { useProfile } from '@/hooks/useProfile'

import styles from '../dashboard-layout.module.scss'

import { MenuItem } from './MenuItem'
import { MENU, MENU_ADMIN } from './menu.data'
import { useTimer } from '@/app/me/timer/hooks/useTimer'

export function Sidebar({
	isMinimized,
	setIsMinimized
}: {
	isMinimized: boolean
	setIsMinimized: Dispatch<SetStateAction<boolean>>
}) {
	const timerState = useTimer()
	const { data } = useProfile()

	useEffect(() => {
		timerState.setIsRunning(sessionStorage.getItem('TimerIsRunning') === 'true')
	}, [timerState])

	return (
		<aside className={styles.aside}>
			<div>
				<Link
					href='/'
					className='flex items-center p-layout gap-2.5'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
						className={cn(isMinimized && 'translate-x-[5px]', 'duration-500')}
					/>
					<span
						className={cn(
							isMinimized && 'opacity-0 w-0 h-0',
							'text-[24px] font-bold relative'
						)}
					>
						<span className='text-[#218f5d]'>Eco</span>-Planner
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					{data?.user.role !== 'user'
						? MENU_ADMIN.map(item => (
								<MenuItem
									item={item}
									key={item.link}
									isMinimized={isMinimized}
								/>
							))
						: MENU.map(item => (
								<MenuItem
									item={item}
									key={item.link}
									isMinimized={isMinimized}
								/>
							))}
				</div>
			</div>
			<footer
				className={cn(
					'flex p-3 duration-200',
					isMinimized ? 'justify-center' : 'justify-end'
				)}
			>
				<button
					className='hover:scale-125 duration-200'
					onClick={() => {
						setIsMinimized(!isMinimized)
						localStorage.setItem('isMinimized', JSON.stringify(!isMinimized))
					}}
				>
					<ArrowLeftToLine
						size={28}
						className={cn(isMinimized && 'rotate-180', 'duration-200')}
					/>
				</button>
			</footer>
		</aside>
	)
}
