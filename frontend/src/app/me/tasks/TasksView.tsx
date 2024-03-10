'use client'

import React from 'react'

import { Heading } from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'

import { useLanguage } from '@/hooks/useLanguage'
import { useLocalStorage } from '@/hooks/useLocalStorage'

import { SwitcherView } from './SwitcherView'
import { KanbanView } from './kanban-view/KanbanView'
import { ListView } from './list-view/ListView'
import { TodoView } from './todo/TodoView'

export type TypeView = 'list' | 'kanban' | 'todo'

function TasksView() {
	const language: string = useLanguage()
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	if (isLoading) return <Loader />

	return (
		<>
			<Heading
				title={
					language === '🇷🇺'
						? 'Задачи'
						: language === '🇩🇪'
							? 'Aufgaben'
							: language === '🇨🇳'
								? '任务'
								: 'Tasks'
				}
			/>
			<div>
				<SwitcherView
					setType={setType}
					type={type}
				/>
				{type === 'list' && <ListView />}
				{type === 'kanban' && <KanbanView />}
				{type === 'todo' && <TodoView />}
			</div>
		</>
	)
}

export default React.memo(TasksView)
