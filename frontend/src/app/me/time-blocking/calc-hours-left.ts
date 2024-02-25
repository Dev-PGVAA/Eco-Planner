import { ITimeBlockResponse } from '@/types/time-block.types'

export function calcHoursLeft(items: ITimeBlockResponse[] | undefined) {
	const totalMinutes = items?.reduce((acc, item) => acc + item.duration, 0) || 0
	const hoursLeft = 24 - Math.ceil(totalMinutes / 60)

	const totalTimeString = `${Math.ceil(totalMinutes / 60)} hours ${totalMinutes % 60 !== 0 ? (totalMinutes % 60) + ' minutes' : ''}`
	const totalTimeLeftString = `${24 - Math.ceil(totalMinutes / 60)} hours ${totalMinutes % 60 !== 0 ? 60 - (totalMinutes % 60) + ' minutes' : ''}`

	return { hoursLeft, totalTimeLeftString, totalTimeString }
}
