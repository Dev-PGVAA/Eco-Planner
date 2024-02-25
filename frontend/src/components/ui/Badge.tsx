import type { CSSProperties, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

interface IBadge {
	className?: string
	variant?: string
	style?: CSSProperties
}

const badge = tv({
	base: 'rounded-lg w-max py-1 px-2 text-xs font-semibold text-sm transition',
	variants: {
		backgroundColor: {
			gray: 'bg-gray-500/20',
			critical: 'animate-BgBageCritivalPulse',
			urgent: 'bg-red-500/60',
			high: 'bg-red-300/60',
			medium: 'bg-orange-400/70',
			low: 'bg-blue-400/70'
		}
	},
	defaultVariants: {
		backgroundColor: 'gray'
	}
})

export function Badge({
	children,
	className,
	variant,
	style
}: PropsWithChildren<IBadge>) {
	return (
		<span
			className={badge({
				backgroundColor: variant as
					| 'low'
					| 'medium'
					| 'high'
					| 'urgent'
					| 'critical',
				className
			})}
			style={style}
		>
			{children}
		</span>
	)
}
