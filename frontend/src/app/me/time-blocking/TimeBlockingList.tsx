import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import Loader from '@/components/ui/Loader'

import { useLanguage } from '@/hooks/useLanguage'

import { TimeBlock } from './TimeBlock'
import styles from './TimeBlocking.module.scss'
import { useTimeBlockDnd } from './hooks/useTimeBlockDnd'
import { useTimeBlocks } from './hooks/useTimeBlocks'
import { translator } from '@/services/translate.service'

export function TimeBlockingList() {
	const { items, setItems, isLoading } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)
	const { language } = useLanguage()

	if (isLoading) return <Loader />

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
								{translator(
									'Add the first time block on the right form',
									language
								)}
							</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
		</div>
	)
}
