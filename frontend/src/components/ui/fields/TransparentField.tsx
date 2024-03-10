import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'

import styles from './field.module.scss'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>
type TypeTransparentFieldProps = {
	isAutoFocus: boolean
}

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentFieldProps & TypeTransparentField
>(({ className, isAutoFocus, ...rest }, ref) => {
	return (
		<input
			className={cn(
				'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full placeholder:text-xs placeholder:-translate-y-[2px] ',
				className,
				styles.transparentField
			)}
			ref={ref}
			{...rest}
			autoFocus={isAutoFocus}
		/>
	)
})

TransparentField.displayName = 'TransparentField'
