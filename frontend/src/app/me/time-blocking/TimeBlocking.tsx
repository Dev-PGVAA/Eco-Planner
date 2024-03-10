'use client'

import { FormProvider, useForm } from 'react-hook-form'

import { Heading } from '@/components/ui/Heading'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import { useLanguage } from '@/hooks/useLanguage'

import { TimeBlockingList } from './TimeBlockingList'
import { TimeBlockingForm } from './form/TimeBlockingForm'

export function TimeBlocking() {
	const methods = useForm<TypeTimeBlockFormState>()
	const language: string = useLanguage()

	return (
		<>
			<Heading
				title={
					language === '🇷🇺'
						? 'Рутинные дела'
						: language === '🇩🇪'
							? 'Zeitblockierung'
							: language === '🇨🇳'
								? '时间堵塞'
								: 'Time blocking'
				}
			/>
			<FormProvider {...methods}>
				<div className='grid grid-cols-2 gap-12'>
					<TimeBlockingList />
					<TimeBlockingForm />
				</div>
			</FormProvider>
		</>
	)
}
