'use client'

import { Moon } from 'lucide-react'

import styles from '../settings.module.scss'

export function Appearance() {
	return (
		<div className='flex flex-wrap justify-center'>
			<p className={styles.link}>
				<span className='grid grid-cols-2 translate-y-1'>
					<span className='mr-2 flex'>
						<Moon />
						<span className='ml-3 -translate-y-1'>Theme</span>
					</span>
					{/* TODO: selection 'data-theme: light or dark' */}
					<span></span>
				</span>
			</p>
		</div>
	)
}
