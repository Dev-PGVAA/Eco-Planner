import cn from 'clsx'
import Link from 'next/link'

import { useLanguage } from '@/hooks/useLanguage'

import { IMenuItem } from './menu.interface'
import { translator } from '@/services/translate.service'

export function MenuItem({
	item,
	isMinimized
}: {
	item: IMenuItem
	isMinimized: boolean
}) {
	const { language } = useLanguage()

	return (
		<div>
			<Link
				href={item.link}
				className={cn(
					'flex items-center py-1.5 mt-3 px-layout transition-colors hover:bg-border rounded-lg',
					!isMinimized && 'gap-4 mt-2'
				)}
			>
				<item.icon />
				<span className={cn(isMinimized && 'opacity-0 w-0 h-0')}>
					{translator(item.name, language)}
				</span>
			</Link>
		</div>
	)
}
