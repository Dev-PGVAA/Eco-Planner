import { LockKeyhole, LucideIcon, SunMoon, Timer } from 'lucide-react'

export interface ISettingsItem {
	link: string
	name: string
	icon: LucideIcon
}
export const SETTINGS_ITEMS: ISettingsItem[] = [
	{
		link: '/me/settings/security',
		name: 'Security',
		icon: LockKeyhole
	},
	{
		link: '/me/settings/timer',
		name: 'Timer',
		icon: Timer
	},
	{
		link: '/me/settings/appearance',
		name: 'Appearance',
		icon: SunMoon
	}
]
