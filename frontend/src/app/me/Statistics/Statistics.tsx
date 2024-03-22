'use client'

import { Heading } from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'

import { useLanguage } from '@/hooks/useLanguage'
import { useProfile } from '@/hooks/useProfile'

import styles from './Statistics.module.scss'
import { StatisticsLabel } from './statistics.data'
import { translator } from '@/services/translate.service'

export function Statistics() {
	const { data, isLoading } = useProfile()
	const { language } = useLanguage()

	return (
		<>
			<Heading title={translator('Statistics', language)} />
			{isLoading ? (
				<>
					<i className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
						<Loader />
					</i>
				</>
			) : (
				<>
					<div className='grid grid-cols-4 gap-12 mt-7'>
						{data?.statistics.length ? (
							data.statistics.map((statistic, i) => (
								<div
									className={styles.statisticCard}
									key={i}
								>
									<div className='text-xl'>
										{translator(StatisticsLabel[i].label, language)}
									</div>
									<div className='text-3xl font-semibold'>
										{statistic.value}
									</div>
								</div>
							))
						) : (
							<div>Statistics not found</div>
						)}
					</div>
				</>
			)}
		</>
	)
}
