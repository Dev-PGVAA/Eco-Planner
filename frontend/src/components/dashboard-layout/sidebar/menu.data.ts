import {
	CalendarRange,
	Cog,
	KanbanSquare,
	LayoutDashboard,
	LineChart,
	Timer
} from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: DASHBOARD_PAGES.HOME,
		name: 'Home'
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.TASKS,
		name: 'Tasks'
	},
	{
		icon: Timer,
		link: DASHBOARD_PAGES.TIMER,
		name: 'Timer'
	},
	{
		icon: CalendarRange,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Time blocking'
	},
	{
		icon: Cog,
		link: DASHBOARD_PAGES.SETTINGS.HOME,
		name: 'Settings'
	}
]
export const MENU_ADMIN: IMenuItem[] = [
	{
		icon: LineChart,
		link: DASHBOARD_PAGES.STATISTICS,
		name: 'Statistics'
	},
	...MENU
]
