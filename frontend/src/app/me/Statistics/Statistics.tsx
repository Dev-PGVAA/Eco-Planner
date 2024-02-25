'use client'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

import styles from './Statistics.module.scss'

export function Statistics() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<i className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
			<Loader />
		</i>
	) : (
		<div className='grid grid-cols-4 gap-12 mt-7'>
			{data?.statistics.length ? (
				data.statistics.map(statistic => (
					<div
						className={styles.statisticCard}
						key={statistic.label}
					>
						<div className='text-xl'>{statistic.label}</div>
						<div className='text-3xl font-semibold'>{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}
