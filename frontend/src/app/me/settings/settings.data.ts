import { LockKeyhole, LucideIcon, SunMoon, Timer } from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export interface ISettingsItem {
	link: string
	name: string
	icon: LucideIcon
}
export const SETTINGS_ITEMS: ISettingsItem[] = [
	{
		link: DASHBOARD_PAGES.SETTINGS.SECURITY,
		name: 'Security',
		icon: LockKeyhole
	},
	{
		link: DASHBOARD_PAGES.SETTINGS.TIMER,
		name: 'Timer',
		icon: Timer
	},
	{
		link: DASHBOARD_PAGES.SETTINGS.APPEARANCE,
		name: 'Appearance',
		icon: SunMoon
	}
]
