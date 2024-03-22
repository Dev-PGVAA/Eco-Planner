'use client'

import cn from 'clsx'
import { ChevronDown, Languages, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Heading } from '@/components/ui/Heading'
import Switch from '@/components/ui/switch/switch'

import { useLanguage } from '@/hooks/useLanguage'

import { GoBack } from '../GoBack'
import styles from '../settings.module.scss'

import { LANGUAGES } from './language.data'
import { translator } from '@/services/translate.service'

export function Appearance() {
	const [isDarkTheme, setIsDarkTheme] = useState(true)
	const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

	const { language, changeLanguage } = useLanguage()

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
			<Heading title={translator('Appearance', language)} />
			<GoBack />
			<div className='flex flex-wrap justify-center'>
				<p className={styles.link}>
					<span className='grid grid-cols-[auto_50px] translate-y-1'>
						<span className='mr-2 flex'>
							<i className=' -translate-y-[2px]'>
								<Moon />
							</i>
							<span className='ml-3 -translate-y-1'>
								{translator('Dark theme', language)}
							</span>
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
			<div className='flex flex-wrap justify-center'>
				<div className='flex flex-wrap justify-center w-full'>
					<p className={styles.link}>
						<span className='grid grid-cols-[auto_50px] translate-y-1'>
							<span className='mr-2 flex'>
								<i className=' -translate-y-[2px]'>
									<Languages />
								</i>
								<span className='ml-3 -translate-y-1'>
									{translator('Language', language)}
								</span>
							</span>
							<button
								className='flex justify-end absolute w-full z-[2]'
								onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
							>
								<ChevronDown
									size={30}
									className={cn(
										isLanguageMenuOpen && 'rotate-180',
										'duration-200 -translate-y-1'
									)}
								/>
							</button>
						</span>
					</p>
				</div>
				<div
					className={cn(
						styles.languageMenu,
						isLanguageMenuOpen
							? 'opacity-100'
							: 'opacity-0 -translate-y-[100%] h-0'
					)}
				>
					{LANGUAGES.map(item => (
						<button
							key={item.name}
							onClick={() => {
								changeLanguage(item.value)
								localStorage.setItem('language', item.value)
								setIsLanguageMenuOpen(false)
								window.location.reload()
							}}
						>
							<p>{item.index}</p>
							<span>{item.name}</span>
						</button>
					))}
				</div>
			</div>
		</>
	)
}
