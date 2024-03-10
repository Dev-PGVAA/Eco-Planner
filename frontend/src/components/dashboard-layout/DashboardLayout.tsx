'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import { type PropsWithChildren, useEffect, useState } from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	const [isShowProfile, setIsShowProfile] = useState(false)
	const [isMinimized, setIsMinimized] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		if (window.location.pathname === '/me/settings') setIsShowProfile(false)
		else setIsShowProfile(true)
	}, [pathname])

	useEffect(() => {
		setIsMinimized(JSON.parse(localStorage.getItem('isMinimized') || 'false'))
	})

	return (
		<section
			className={cn(
				'grid min-h-screen',
				isMinimized
					? '4xl:grid-cols-[0.3fr_6.6fr] grid-cols-[0.4fr_6.8fr]'
					: '4xl:grid-cols-[0.9fr_6fr] grid-cols-[2fr_6.8fr]'
			)}
		>
			<Sidebar
				isMinimized={isMinimized}
				setIsMinimized={setIsMinimized}
			/>
			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				{isShowProfile && <Header />}

				{children}
			</main>
		</section>
	)
}
