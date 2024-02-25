import { Loader as LoaderIcon } from 'lucide-react'

const Loader = () => {
	return (
		<div className='flex justify-center items-center'>
			<LoaderIcon className='animate-spin h-7 w-7 text-white' />
		</div>
	)
}

export default Loader
