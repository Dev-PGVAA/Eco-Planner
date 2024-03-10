import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import Loader from '@/components/ui/Loader'

import { useLanguage } from '@/hooks/useLanguage'

import { TimeBlock } from './TimeBlock'
import styles from './TimeBlocking.module.scss'
import { calcHoursLeft } from './calc-hours-left'
import { useTimeBlockDnd } from './hooks/useTimeBlockDnd'
import { useTimeBlocks } from './hooks/useTimeBlocks'

export function TimeBlockingList() {
	const language: string = useLanguage()
	const { items, setItems, isLoading } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

	if (isLoading) return <Loader />

	const { hoursLeft, totalTimeLeftString, totalTimeString } =
		calcHoursLeft(items)

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className={styles.list}>
					<SortableContext
						items={items || []}
						strategy={verticalListSortingStrategy}
					>
						{items?.length ? (
							items?.map(item => (
								<TimeBlock
									key={item.id}
									item={item}
								/>
							))
						) : (
							<div>
								{language === '🇷🇺'
									? 'Добавьте первый блок времени справа'
									: language === '🇩🇪'
										? 'Fügen Sie den ersten Zeitblock auf dem rechten Formular hinzu'
										: language === '🇨🇳'
											? '在右侧表单上添加第一个时间块'
											: 'Add the first time block on the right form'}
							</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			<div>
				<p>
					{language === '🇷🇺'
						? 'Общее время'
						: language === '🇩🇪'
							? 'Gesamtzeit'
							: language === '🇨🇳'
								? '总时间'
								: 'Total time'}
					: {totalTimeString}
				</p>
				<p>
					{hoursLeft > 0
						? `${totalTimeLeftString} ${
								language === '🇷🇺'
									? 'осталось для сна'
									: language === '🇩🇪'
										? 'verbleibende Schlafzeit'
										: language === '🇨🇳'
											? '剩余睡眠时间'
											: 'left for sleep'
							}`
						: language === '🇷🇺'
							? 'Время для сна исчерпано'
							: language === '🇩🇪'
								? 'Schlafzeit ist abgelaufen'
								: language === '🇨🇳'
									? '睡眠时间已用完'
									: 'Sleep time is over'}
				</p>
			</div>
		</div>
	)
}
