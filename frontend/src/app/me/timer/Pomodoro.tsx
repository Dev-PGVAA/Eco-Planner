'use client'

import cn from 'clsx'
import { Cog, Loader } from 'lucide-react'
import Link from 'next/link'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { useLanguage } from '@/hooks/useLanguage'

import { formatTime } from './format-time'
import { useCreateSession } from './hooks/useCreateSession'
import { useDeleteSession } from './hooks/useDeleteSession'
import { useTimerActions } from './hooks/useTimerActions'
import { useTodaySession } from './hooks/useTodaySession'
import { PomodoroRounds } from './rounds/PomodoroRounds'
import styles from './timer.module.scss'
import { useTimer } from '@/app/me/timer/hooks/useTimer'

export function Pomodoro() {
	const language: string = useLanguage()
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
		<>
			<Heading
				title={
					language === '🇷🇺'
						? 'Таймер'
						: language === '🇩🇪'
							? 'Timer'
							: language === '🇨🇳'
								? '计时器'
								: 'Timer'
				}
			/>
			<div className='w-full h-full flex justify-center'>
				{isLoading ? (
					<Loader />
				) : sessionsResponse?.data ? (
					<div>
						<div className='flex m-auto w-72 h-72 mb-10'>
							<Link
								href={DASHBOARD_PAGES.SETTINGS.TIMER}
								className='absolute hover:scale-110 duration-150'
							>
								<Cog size={20} />
							</Link>
							<p className='flex justify-center items-center w-full text-[4.5rem] text-[#e8def8}'>
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
								{language === '🇷🇺'
									? 'Отмена'
									: language === '🇩🇪'
										? 'Stornieren'
										: language === '🇨🇳'
											? '取消'
											: 'Cancel'}
							</button>
							<button
								className={cn(styles.button, styles.btn2)}
								onClick={() => Handler()}
								disabled={isDeletePending}
							>
								{timerState.isRunning
									? language === '🇷🇺'
										? 'Пауза'
										: language === '🇩🇪'
											? 'Pause'
											: language === '🇨🇳'
												? '暂停'
												: 'Pause'
									: language === '🇷🇺'
										? 'Старт'
										: language === '🇩🇪'
											? 'Start'
											: language === '🇨🇳'
												? '开始'
												: 'Start'}
							</button>
						</div>
					</div>
				) : (
					<Button
						onClick={() => mutate()}
						className='mt-1'
						disabled={isPending}
					>
						{language === '🇷🇺'
							? 'Создать сессию'
							: language === '🇩🇪'
								? 'Sitzung erstellen'
								: language === '🇨🇳'
									? '创建会话'
									: 'Create session'}
					</Button>
				)}
			</div>
		</>
	)
}
