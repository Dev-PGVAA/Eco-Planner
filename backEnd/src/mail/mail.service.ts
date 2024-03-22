import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'
import { forgotPasswordMail } from './messages/forgotPassword'

type TEmail = 'feedback' | 'verification-code'

@Injectable()
export class MailService {
	sendMail(email: string, code: string, typeEmail: TEmail) {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'ecoplannermailer@gmail.com',
				pass: 'iffl idhx awvr agnp'
			}
		})

		transporter.sendMail({
			from: 'ecoplannermailer@gmail.com',
			to: email,
			subject: 'Forgot Password',
			html:
				typeEmail === 'verification-code'
					? forgotPasswordMail(code)
					: 'Feedback'
		})

		return { response: JSON.stringify('Verification code sent to your email') }
	}
}
