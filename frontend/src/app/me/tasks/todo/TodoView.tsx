import { DragDropContext } from '@hello-pangea/dnd'

import { useTaskTodoDnd } from '../hooks/useTaskDnd'
import { useTasksTodo } from '../hooks/useTasks'

import { TodoRowParent } from './TodoRowParent'

export function TodoView() {
	const { items, setItems } = useTasksTodo()
	const { onDragEnd } = useTaskTodoDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				<TodoRowParent
					items={items}
					setItems={setItems}
				/>
			</div>
		</DragDropContext>
	)
}
