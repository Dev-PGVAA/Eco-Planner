import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
// подключение локали, если она вам нужна
import isoWeek from 'dayjs/plugin/isoWeek'
// ISO неделя
import weekOfYear from 'dayjs/plugin/weekOfYear'

import { useLanguage } from '@/hooks/useLanguage'

// плагин для работы с неделями

dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)
const language: string = useLanguage()

export const FILTERS: Record<string, Dayjs> = {
	today: dayjs().startOf('day'),
	tomorrow: dayjs().add(1, 'day').startOf('day'),
	'on-this-week': dayjs().endOf('isoWeek'),
	'on-next-week': dayjs().add(1, 'week').startOf('day'),
	later: dayjs().add(2, 'week').startOf('day')
}

export const COLUMNS = [
	{
		label:
			language === '🇷🇺'
				? 'Сегодня'
				: language === '🇩🇪'
					? 'Heute'
					: language === '🇨🇳'
						? '今天'
						: 'Today',
		value: 'today'
	},
	{
		label:
			language === '🇷🇺'
				? 'Завтра'
				: language === '🇩🇪'
					? 'Morgen'
					: language === '🇨🇳'
						? '明天'
						: 'Tomorrow',
		value: 'tomorrow'
	},
	{
		label:
			language === '🇷🇺'
				? 'На этой неделе'
				: language === '🇩🇪'
					? 'Diese Woche'
					: language === '🇨🇳'
						? '这周'
						: 'On this week',
		value: 'on-this-week'
	},
	{
		label:
			language === '🇷🇺'
				? 'На следующей неделе'
				: language === '🇩🇪'
					? 'Nächste Woche'
					: language === '🇨🇳'
						? '下周'
						: 'On next week',
		value: 'on-next-week'
	},
	{
		label:
			language === '🇷🇺'
				? 'Позже'
				: language === '🇩🇪'
					? 'Später'
					: language === '🇨🇳'
						? '以后'
						: 'Later',
		value: 'later'
	},
	{
		label:
			language === '🇷🇺'
				? 'Завершенные'
				: language === '🇩🇪'
					? 'Abgeschlossen'
					: language === '🇨🇳'
						? '已完成'
						: 'Completed',
		value: 'completed'
	}
]
