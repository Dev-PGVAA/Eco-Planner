import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Appearance } from './Appearance'

export const metadata: Metadata = {
	title: 'Appearance - Settings',
	...NO_INDEX_PAGE
}

export default function Page() {
	return (
		<>
			<Heading title='Appearance settings' />
			<Appearance />
		</>
	)
}
