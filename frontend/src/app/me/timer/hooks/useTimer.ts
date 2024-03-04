import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { useLoadSettings } from '@/app/me/timer/hooks/useLoadSettings'
import type { ITimerState } from '@/app/me/timer/timer.types'
import { notification } from '@/services/notifier'

export function useTimer(): ITimerState {
	const { breakInterval, workInterval } = useLoadSettings()

	const [isRunning, setIsRunning] = useState(false)
	const [isBreakTime, setIsBreakTime] = useState(false)

	const [secondsLeft, setSecondsLeft] = useState(workInterval * 60)
	const [activeRound, setActiveRound] = useState<IPomodoroRoundResponse>()

	const pathname = usePathname() as string

	const setProgress = (percent: number) => {
		const circle = document.querySelector(
			'.progress-ring__circle'
		) as SVGCircleElement
		const radius = circle.r.baseVal.value
		const circumference = radius * 2 * Math.PI

		circle.style.strokeDasharray = `${circumference} ${circumference}`
		circle.style.strokeDashoffset = `${circumference}`

		const offset = circumference - (percent / 10000) * circumference
		circle.style.strokeDashoffset = `${offset}`
	}

	useEffect(() => {
		setSecondsLeft(
			Number(sessionStorage.getItem('secondsLeft')) || workInterval * 60
		)
	}, [isRunning, workInterval])

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null
		setIsRunning(sessionStorage.getItem('TimerIsRunning') === 'true')

		if (isRunning) {
			interval = setInterval(() => {
				setSecondsLeft(secondsLeft => secondsLeft - 1)
				if (pathname === DASHBOARD_PAGES.TIMER)
					setProgress((secondsLeft / (workInterval * 60)) * 10000)
				sessionStorage.setItem('secondsLeft', (secondsLeft - 1).toString())
				if (secondsLeft <= 1) {
					setIsRunning(false)
					sessionStorage.setItem('TimerIsRunning', 'false')
					if (pathname === DASHBOARD_PAGES.TIMER) setProgress(0)
					notification('Timer', 'Time is up')
				}
			}, 1000)
		}

		return () => {
			if (interval) clearInterval(interval)
		}
	}, [isRunning, secondsLeft, workInterval, activeRound, pathname])

	useEffect(() => {
		// Ранний выход, если время не истекло
		if (secondsLeft > 0) return

		// Переключение режима и установка нового времени одной операцией
		setIsBreakTime(!isBreakTime)
		setSecondsLeft((isBreakTime ? workInterval : breakInterval) * 60)
	}, [secondsLeft, isBreakTime, workInterval, breakInterval])

	return {
		activeRound,
		secondsLeft,
		setActiveRound,
		setIsRunning,
		setSecondsLeft,
		isRunning
	}
}
