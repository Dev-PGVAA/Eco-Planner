export function ModalWrapper({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className='h-screen w-screen fixed top-1/2 left-1/2 z-10 bg-[#ffffff4d] -translate-x-48 -translate-y-1/2 duration-400'>
			{children}
		</div>
	)
}
