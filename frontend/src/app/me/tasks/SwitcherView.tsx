'use client'

import cn from 'clsx'
import { CalendarCheck, Kanban, ListTodo } from 'lucide-react'

import { useLanguage } from '@/hooks/useLanguage'

import type { TypeView } from './TasksView'
import { translator } from '@/services/translate.service'

interface ISwitcherView {
	type: TypeView
	setType: (value: TypeView) => void
}

export function SwitcherView({ setType, type }: ISwitcherView) {
	const { language } = useLanguage()

	return (
		<div className='flex items-center gap-4 mb-5'>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type !== 'list'
				})}
				onClick={() => setType('list')}
			>
				<CalendarCheck />
				{translator('List', language)}
			</button>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type !== 'kanban'
				})}
				onClick={() => setType('kanban')}
			>
				<Kanban />
				{translator('Kanban', language)}
			</button>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type !== 'todo'
				})}
				onClick={() => setType('todo')}
			>
				<ListTodo />
				{translator('Todo', language)}
			</button>
		</div>
	)
}
