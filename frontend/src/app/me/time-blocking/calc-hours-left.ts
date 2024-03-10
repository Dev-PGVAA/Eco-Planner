import { ITimeBlockResponse } from '@/types/time-block.types'

import { useLanguage } from '@/hooks/useLanguage'

export function calcHoursLeft(items: ITimeBlockResponse[] | undefined) {
	const language: string = useLanguage()
	const totalMinutes = items?.reduce((acc, item) => acc + item.duration, 0) || 0
	const hoursLeft = 24 - Math.ceil(totalMinutes / 60)

	const totalTimeString = `${Math.ceil(totalMinutes / 60)} ${
		language === '🇷🇺'
			? 'часов'
			: language === '🇩🇪'
				? 'Stunden'
				: language === '🇨🇳'
					? '小时'
					: 'hours'
	} ${
		totalMinutes % 60 !== 0
			? (totalMinutes % 60) +
				(language === '🇷🇺'
					? ' минут'
					: language === '🇩🇪'
						? ' Minuten'
						: language === '🇨🇳'
							? ' 分钟'
							: ' minutes')
			: ''
	}`
	const totalTimeLeftString = `${24 - Math.ceil(totalMinutes / 60)} ${
		language === '🇷🇺'
			? 'часов'
			: language === '🇩🇪'
				? 'Stunden'
				: language === '🇨🇳'
					? '小时'
					: 'hours'
	} ${
		totalMinutes % 60 !== 0
			? 60 -
				(totalMinutes % 60) +
				(language === '🇷🇺'
					? ' минут'
					: language === '🇩🇪'
						? ' Minuten'
						: language === '🇨🇳'
							? ' 分钟'
							: ' minutes')
			: ''
	}`

	return { hoursLeft, totalTimeLeftString, totalTimeString }
}
