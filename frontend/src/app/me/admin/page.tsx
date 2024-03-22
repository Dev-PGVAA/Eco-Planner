import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Admin } from './Admin'

export const metadata: Metadata = {
	title: 'Statistics - admin',
	...NO_INDEX_PAGE
}

export default function AdminPage() {
	return (
		<div>
			<Admin />
		</div>
	)
}
