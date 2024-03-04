'use client'

import { ArrowLeftCircle } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export function GoBack() {
	const { pathname }: any = usePathname()
	const router = useRouter()

	const goBack = () => {
		router.push(DASHBOARD_PAGES.SETTINGS.HOME)
	}

	return (
		<button
			onClick={() => goBack()}
			className='absolute top-[10px] -translate-x-[38px]'
		>
			<ArrowLeftCircle size={24} />
		</button>
	)
}
