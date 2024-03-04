'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useEffect, useState } from 'react'

export function Providers({ children }: PropsWithChildren) {
	useEffect(() => {
		document.querySelector('html')?.removeAttribute('class')
		const theme = localStorage.getItem('data-theme')
		if (theme) {
			document.querySelector('body')?.setAttribute('data-theme', theme)
		}
	}, [])

	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
