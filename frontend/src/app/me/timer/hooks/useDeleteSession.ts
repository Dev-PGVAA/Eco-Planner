import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { useLoadSettings } from './useLoadSettings'
import { pomodoroService } from '@/services/pomodoro.service'

export function useDeleteSession(onDeleteSuccess: () => void) {
	const { workInterval } = useLoadSettings()

	const queryClient = useQueryClient()

	const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete session'],
		mutationFn: (id: string) => pomodoroService.deleteSession(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get today session']
			})
			onDeleteSuccess()
			sessionStorage.setItem('TimerIsRunning', 'false')
			sessionStorage.setItem('secondsLeft', (workInterval * 60).toString())
			toast.success('Session deleted')
		}
	})

	return { deleteSession, isDeletePending }
}
