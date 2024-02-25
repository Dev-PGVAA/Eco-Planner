import { Metadata } from 'next'
import { FC } from 'react'

import DashboardLayout from '@/components/dashboard-layout/DashboardLayout'
import { Heading } from '@/components/ui/Heading'

export const metadata: Metadata = {
	title: '404'
}

const NotFoundPage: FC = () => {
	return (
		<DashboardLayout>
			<Heading title='404 - Page not found!' />
			<h1 className='m-10 text-[3.5vw]  font-bold'>
				<span className='text-[#7551ff]'>404</span>
				<span className='text-gray-700'> -</span> Page not found!
			</h1>
		</DashboardLayout>
	)
}

export default NotFoundPage
