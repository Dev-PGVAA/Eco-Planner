'use client'

import { ArrowLeftCircle } from 'lucide-react'

export function GoBack() {
	const goBack = () => {
		history.back()
	}

	return (
		<button
			onClick={() => goBack()}
			className='absolute top-[10px] -translate-x-[38px]'
		>
			<ArrowLeftCircle size={24} />
		</button>
	)
}
