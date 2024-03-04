'use client'

import dayjs from 'dayjs'
import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

import { COLORS } from '@/constants/color.constants'

import styles from '../dashboard-layout.module.scss'

import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'
import { useTimer } from '@/app/me/timer/hooks/useTimer'

export function Sidebar() {
	const timerState = useTimer()

	//TODO: move to useTimer
	useEffect(() => {
		timerState.setIsRunning(sessionStorage.getItem('TimerIsRunning') === 'true')
	}, [timerState])

	return (
		<aside className={styles.aside}>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-[27px] font-bold relative'>
						<span className='text-[#218f5d]'>Eco</span>-Planner
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				{dayjs().year()} &copy; With love from{' '}
				<a
					href='https://github.com/Dev-PGVAA'
					target='_blank'
					rel='noreferrer'
					className='hover:text-primary text-brand-300 transition-colors'
				>
					ECO Group
				</a>
				. <br /> All rights reserved.
			</footer>
		</aside>
	)
}
