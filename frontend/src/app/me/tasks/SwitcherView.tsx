'use client'

import cn from 'clsx'
import { CalendarCheck, Kanban, ListTodo } from 'lucide-react'

import { useLanguage } from '@/hooks/useLanguage'

import type { TypeView } from './TasksView'

interface ISwitcherView {
	type: TypeView
	setType: (value: TypeView) => void
}

export function SwitcherView({ setType, type }: ISwitcherView) {
	const language: string = useLanguage()

	return (
		<div className='flex items-center gap-4 mb-5'>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type !== 'list'
				})}
				onClick={() => setType('list')}
			>
				<CalendarCheck />
				{language === '🇷🇺'
					? 'Лист'
					: language === '🇩🇪'
						? 'Liste'
						: language === '🇨🇳'
							? '清单'
							: 'List'}
			</button>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type !== 'kanban'
				})}
				onClick={() => setType('kanban')}
			>
				<Kanban />
				{language === '🇷🇺'
					? 'Доска'
					: language === '🇩🇪'
						? 'Tafel'
						: language === '🇨🇳'
							? '看板'
							: 'Board'}
			</button>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type !== 'todo'
				})}
				onClick={() => setType('todo')}
			>
				<ListTodo />
				{language === '🇷🇺'
					? 'Список задач'
					: language === '🇩🇪'
						? 'Aufgabenliste'
						: language === '🇨🇳'
							? '任务列表'
							: 'Todo list'}
			</button>
		</div>
	)
}
