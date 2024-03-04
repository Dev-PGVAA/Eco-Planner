'use client'

import { Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

import Switch from '@/components/ui/switch/switch'

import { GoBack } from '../GoBack'
import styles from '../settings.module.scss'

export function Appearance() {
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	useEffect(() => {
		const theme = localStorage.getItem('data-theme')
		if (theme) setIsDarkTheme(theme === 'dark')
	}, [])

	const handleThemeChange = () => {
		document
			.querySelector('body')
			?.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark')
		setIsDarkTheme(!isDarkTheme)
		localStorage.setItem('data-theme', isDarkTheme ? 'light' : 'dark')
	}

	return (
		<>
			<GoBack />
			<div className='flex flex-wrap justify-center'>
				<p className={styles.link}>
					<span className='grid grid-cols-[auto_50px] translate-y-1'>
						<span className='mr-2 flex'>
							<i className=' -translate-y-[2px]'>
								<Moon />
							</i>
							<span className='ml-3 -translate-y-1'>Dark theme</span>
						</span>
						<button
							onChange={() => handleThemeChange()}
							className='w-[25px] flex'
						>
							<Switch checked={isDarkTheme} />
						</button>
					</span>
				</p>
			</div>
		</>
	)
}
