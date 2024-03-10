'use client'

import { ForgotPassword } from '@/components/modals/forgot-password/forgotPassword'

import AboutUs from './aboutUs/aboutUs'
import styles from './auth.module.scss'
import Aside from './sidebar'

export function Auth() {
	return (
		<section className={styles.auth}>
			<Aside />
			<AboutUs />
			<ForgotPassword />
		</section>
	)
}
