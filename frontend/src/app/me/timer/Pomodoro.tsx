'use client'

import cn from 'clsx'
import { Cog, Loader } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/buttons/Button'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { formatTime } from './format-time'
import { useCreateSession } from './hooks/useCreateSession'
import { useDeleteSession } from './hooks/useDeleteSession'
import { useTimerActions } from './hooks/useTimerActions'
import { useTodaySession } from './hooks/useTodaySession'
import { PomodoroRounds } from './rounds/PomodoroRounds'
import styles from './timer.module.scss'
import { useTimer } from '@/app/me/timer/hooks/useTimer'

export function Pomodoro() {
	const timerState = useTimer()
	const { isLoading, sessionsResponse, workInterval } =
		useTodaySession(timerState)

	const rounds = sessionsResponse?.data.rounds
	const actions = useTimerActions({ ...timerState, rounds })

	const { isPending, mutate } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	const Handler = () => {
		sessionStorage.setItem('TimerIsRunning', (!timerState.isRunning).toString())
		timerState.setIsRunning(!timerState.isRunning)
		if (timerState.isRunning) {
			timerState.setSecondsLeft(timerState.secondsLeft)
		}
	}

	return (
		<div className='w-full h-full flex justify-center'>
			{isLoading ? (
				<Loader />
			) : sessionsResponse?.data ? (
				<div className=''>
					<svg
						className='absolute -rotate-90 transform w-72 h-72 -z-10'
						width='288'
						height='288'
					>
						<circle
							className={cn('progress-ring__circle', styles.circle)}
							strokeWidth='4'
							cx='144'
							cy='144'
							r='136'
							fill='transparent'
						/>
					</svg>
					<Link
						href={DASHBOARD_PAGES.SETTINGS.TIMER}
						className='absolute hover:scale-110 duration-150'
					>
						<Cog size={20} />
					</Link>
					<div className='flex m-auto w-72 h-72 mb-10'>
						<p className='flex justify-center items-center w-full text-[4.5rem] text-[#e8def8}'>
							{formatTime(timerState.secondsLeft)}
						</p>
					</div>
					<PomodoroRounds
						rounds={rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRound={timerState.activeRound}
					/>
					<div className='flex justify-center mt-10'>
						<button
							className={cn(styles.button, styles.btn1)}
							onClick={() => {
								timerState.setIsRunning(false)
								deleteSession(sessionsResponse.data.id)
							}}
						>
							Cancel
						</button>
						<button
							className={cn(styles.button, styles.btn2)}
							onClick={() => Handler()}
							disabled={isDeletePending}
						>
							{timerState.isRunning ? 'Pause' : 'Start'}
						</button>
					</div>
				</div>
			) : (
				<Button
					onClick={() => mutate()}
					className='mt-1'
					disabled={isPending}
				>
					Create session
				</Button>
			)}
		</div>
	)
}
