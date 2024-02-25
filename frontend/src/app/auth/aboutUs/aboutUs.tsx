import cn from 'clsx'
import { FC } from 'react'

import styles from '../auth.module.scss'

const aboutUs: FC = () => {
	return (
		<main>
			<div className={cn(styles.circle, styles.circle1)} />
			<div className={cn(styles.circle, styles.circle2)} />
			<div className={cn(styles.circle, styles.circle3)} />
			<div className={cn(styles.circle, styles.circle4)} />
			<div className={styles.aboutUsText}>
				<h2>About Us</h2>
				<p>
					"We are a team of <b>ECO Planner</b> developing innovative solutions
					for planning and resource management. Our goal is to help people and
					organizations use their resources efficiently, reducing waste and
					minimizing environmental impact. We believe that proper planning and
					management can lead to a greener and more sustainable future. Join us
					in this journey!"
				</p>
			</div>
		</main>
	)
}

export default aboutUs
