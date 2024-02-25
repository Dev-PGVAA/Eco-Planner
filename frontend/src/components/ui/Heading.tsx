import styles from './heading.module.scss'

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<div>
			<h1 className='text-3xl font-medium cursor-default'>{title}</h1>
			<div className={styles.line} />
		</div>
	)
}
