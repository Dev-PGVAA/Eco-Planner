'use client'

import { Heading } from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'

import { useLanguage } from '@/hooks/useLanguage'
import { useProfile } from '@/hooks/useProfile'

import styles from './Statistics.module.scss'
import { StatisticsLabel } from './statistics.data'

export function Statistics() {
	const { data, isLoading } = useProfile()
	const language: string = useLanguage()

	return isLoading ? (
		<>
			<Heading
				title={
					language === '🇷🇺'
						? 'Статистика'
						: language === '🇩🇪'
							? 'Statistik'
							: language === '🇨🇳'
								? '统计'
								: 'Statistics'
				}
			/>
			<i className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
				<Loader />
			</i>
		</>
	) : (
		<>
			<Heading
				title={
					language === '🇷🇺'
						? 'Статистика'
						: language === '🇩🇪'
							? 'Statistik'
							: language === '🇨🇳'
								? '统计'
								: 'Statistics'
				}
			/>
			<div className='grid grid-cols-4 gap-12 mt-7'>
				{data?.statistics.length ? (
					data.statistics.map((statistic, i) => (
						<div
							className={styles.statisticCard}
							key={i}
						>
							<div className='text-xl'>{StatisticsLabel[i].label}</div>
							<div className='text-3xl font-semibold'>{statistic.value}</div>
						</div>
					))
				) : (
					<div>
						{language === '🇷🇺'
							? 'Статистика отсутствует'
							: language === '🇩🇪'
								? 'Statistik nicht verfügbar'
								: language === '🇨🇳'
									? '统计数据不可用'
									: 'Statistics not found'}
					</div>
				)}
			</div>
		</>
	)
}
