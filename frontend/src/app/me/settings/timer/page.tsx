import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ChangeTimerForm } from './ChangeTimerForm'

export const metadata: Metadata = {
	title: 'Timer - Settings',
	...NO_INDEX_PAGE
}

export default function Page() {
	return (
		<>
			<Heading title='Timer settings' />
			<ChangeTimerForm />
		</>
	)
}
