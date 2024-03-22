import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Appearance } from './Appearance'

export const metadata: Metadata = {
	title: 'Appearance - Settings',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <Appearance />
}
