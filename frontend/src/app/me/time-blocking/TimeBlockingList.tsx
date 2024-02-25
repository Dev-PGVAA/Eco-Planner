import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import Loader from '@/components/ui/Loader'

import { TimeBlock } from './TimeBlock'
import styles from './TimeBlocking.module.scss'
import { calcHoursLeft } from './calc-hours-left'
import { useTimeBlockDnd } from './hooks/useTimeBlockDnd'
import { useTimeBlocks } from './hooks/useTimeBlocks'

export function TimeBlockingList() {
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
							<div>Add the first time-block on the right form</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			<div>
				<p>Total time: {totalTimeString}</p>
				<p>
					{hoursLeft > 0
						? `${totalTimeLeftString} out of 24 left for sleep`
						: 'No hours left for sleep'}
				</p>
			</div>
		</div>
	)
}
