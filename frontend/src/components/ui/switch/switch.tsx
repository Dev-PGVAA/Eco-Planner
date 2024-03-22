'use client'

import styles from './switch.module.scss'

const Switch = ({ checked }: { checked: boolean }) => {
	return (
		<div className={styles.switch}>
			<input
				type='checkbox'
				id='switch'
				checked={checked}
				onChange={() => {}}
			/>
			<label htmlFor='switch' />
		</div>
	)
}

export default Switch
