import { LockKeyhole, LucideIcon, SunMoon, Timer } from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { useLanguage } from '@/hooks/useLanguage'

const language: string = useLanguage()

export interface ISettingsItem {
	link: string
	name: string
	icon: LucideIcon
}
export const SETTINGS_ITEMS: ISettingsItem[] = [
	{
		link: DASHBOARD_PAGES.SETTINGS.SECURITY,
		name:
			language === '🇷🇺'
				? 'Безопасность'
				: language === '🇩🇪'
					? 'Sicherheit'
					: language === '🇨🇳'
						? '安全'
						: 'Security',
		icon: LockKeyhole
	},
	{
		link: DASHBOARD_PAGES.SETTINGS.TIMER,
		name:
			language === '🇷🇺'
				? 'Таймер'
				: language === '🇩🇪'
					? 'Timer'
					: language === '🇨🇳'
						? '计时器'
						: 'Timer',
		icon: Timer
	},
	{
		link: DASHBOARD_PAGES.SETTINGS.APPEARANCE,
		name:
			language === '🇷🇺'
				? 'Внешний вид'
				: language === '🇩🇪'
					? 'Erscheinungsbild'
					: language === '🇨🇳'
						? '外观'
						: 'Appearance',
		icon: SunMoon
	}
]
