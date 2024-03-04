'use client'

import { usePathname } from 'next/navigation'
import { type PropsWithChildren, useEffect, useState } from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	const [isShowProfile, setIsShowProfile] = useState(false)
	const { pathname }: any = usePathname()

	useEffect(() => {
		if (window.location.pathname === '/me/settings') setIsShowProfile(false)
		else setIsShowProfile(true)
	})

	return (
		<section className='grid min-h-screen 4xl:grid-cols-[0.9fr_6fr] grid-cols-[1.2fr_6fr]'>
			<Sidebar />
			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				{isShowProfile && <Header />}

				{children}
			</main>
		</section>
	)
}
