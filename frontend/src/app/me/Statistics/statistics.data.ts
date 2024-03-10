import { useLanguage } from '@/hooks/useLanguage'

const language: string = useLanguage()
export const StatisticsLabel = [
	{
		label:
			language === '🇷🇺'
				? 'Всего задач'
				: language === '🇩🇪'
					? 'Alle Aufgaben'
					: language === '🇨🇳'
						? '所有任务'
						: 'Total tasks'
	},
	{
		label:
			language === '🇷🇺'
				? 'Выполнено задач'
				: language === '🇩🇪'
					? 'Erledigte Aufgaben'
					: language === '🇨🇳'
						? '已完成的任务'
						: 'Completed tasks'
	},
	{
		label:
			language === '🇷🇺'
				? 'Задач на сегодня'
				: language === '🇩🇪'
					? 'Aufgaben für heute'
					: language === '🇨🇳'
						? '今天的任务'
						: 'Today tasks'
	},
	{
		label:
			language === '🇷🇺'
				? 'Задач на неделю'
				: language === '🇩🇪'
					? 'Aufgaben für die Woche'
					: language === '🇨🇳'
						? '本周任务'
						: 'Week tasks'
	}
]
