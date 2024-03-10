import cn from 'clsx'
import { AlertTriangle, ChevronLeft, HelpCircle, Mail, X } from 'lucide-react'
import { useState } from 'react'

export function ForgotPassword() {
	const [err, setErr] = useState('')
	const [isOpenModal, setIsOpenModal] = useState(false)

	return (
		<div
			className={cn(
				'flex items-center justify-center',
				isOpenModal
					? 'h-screen w-screen fixed top-0 left-0 z-10 bg-[#ffffff4d]'
					: 'h-0 w-0 -z-10 bg-transparent'
			)}
		>
			<div
				className={cn(
					'absolute top-1/2 left-1/2 -translate-x-1/2 w-1/4 -translate-y-1/2 bg-[#0e0f0f] p-8 rounded-lg shadow-lg min-w-[224px] duration-300',
					isOpenModal ? 'opacity-100' : 'opacity-0 z-0 w-0 h-0'
				)}
			>
				<i className='grid grid-cols-[auto_0px]'>
					<AlertTriangle
						size={90}
						className='block mx-auto mb-3'
						stroke='#e46a62'
					/>
					<X
						className='-translate-x-2 -translate-y-2 cursor-pointer hover:scale-110 duration-200'
						onClick={() => {
							setIsOpenModal(false)
							sessionStorage.setItem('isForgotPasswordModalOpen', 'false')
						}}
					/>
				</i>
				<h2 className='text-center text-xl'>Forgot password</h2>
				<p className='text-sm opacity-50 text-center px-3 mb-3'>
					Enter your email address and we will send you a code.
				</p>
				<div>
					<Mail className='absolute translate-y-2 translate-x-3' />
					<input
						className='border-2 border-border rounded-lg pl-10 outline-none w-full bg-transparent h-10 text-sm'
						placeholder='Enter email address'
					/>
				</div>
				<p className={cn('text-red-600 text-xs ml-2', err ? 'mt-1' : 'h-0')}>
					{err && (
						<>
							<HelpCircle
								className='inline-block mr-1'
								size={20}
							/>
							{err}
						</>
					)}
				</p>
				<button className='bg-[#25b251] w-full rounded-lg mt-5'>Submit</button>
				<button className='text-[15px] flex mx-auto opacity-50 mt-5'>
					<ChevronLeft />
					Back to login
				</button>
			</div>
		</div>
	)
}
