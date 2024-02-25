import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ChangeSecurityForm } from './ChangeSecurityForm'

export const metadata: Metadata = {
	title: 'Security - Settings',
	...NO_INDEX_PAGE
}

export default function SecurityPage() {
	return (
		<>
			<Heading title='Security settings' />
			<ChangeSecurityForm />
		</>
	)
}
