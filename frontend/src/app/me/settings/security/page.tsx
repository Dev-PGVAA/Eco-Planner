import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ChangeSecurityForm } from './ChangeSecurityForm'

export const metadata: Metadata = {
	title: 'Security - Settings',
	...NO_INDEX_PAGE
}

export default function SecurityPage() {
	return <ChangeSecurityForm />
}
