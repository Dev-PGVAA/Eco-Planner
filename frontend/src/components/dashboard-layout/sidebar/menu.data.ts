import {
	CalendarRange,
	Cog,
	KanbanSquare,
	LayoutDashboard,
	Timer
} from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { useLanguage } from '@/hooks/useLanguage'

import type { IMenuItem } from './menu.interface'

const language: string = useLanguage()

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: DASHBOARD_PAGES.HOME,
		name:
			language === '🇷🇺'
				? 'Главная'
				: language === '🇩🇪'
					? 'Startseite'
					: language === '🇨🇳'
						? '首页'
						: 'Home'
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.TASKS,
		name:
			language === '🇷🇺'
				? 'Задачи'
				: language === '🇩🇪'
					? 'Startseite'
					: language === '🇨🇳'
						? '首页'
						: 'Tasks'
	},
	{
		icon: Timer,
		link: DASHBOARD_PAGES.TIMER,
		name:
			language === '🇷🇺'
				? 'Таймер'
				: language === '🇩🇪'
					? 'Timer'
					: language === '🇨🇳'
						? '计时器'
						: 'Timer'
	},
	{
		icon: CalendarRange,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name:
			language === '🇷🇺'
				? 'Рутинные дела'
				: language === '🇩🇪'
					? 'Zeitblockierung'
					: language === '🇨🇳'
						? '时间堵塞'
						: 'Time blocking'
	},
	{
		icon: Cog,
		link: DASHBOARD_PAGES.SETTINGS.HOME,
		name:
			language === '🇷🇺'
				? 'Настройки'
				: language === '🇩🇪'
					? 'Einstellungen'
					: language === '🇨🇳'
						? '设定'
						: 'Settings'
	}
]
