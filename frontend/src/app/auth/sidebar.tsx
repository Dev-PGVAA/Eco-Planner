import { useRouter } from 'next/navigation'
import { useState } from 'react'

import LoginForm from './loginForm/loginForm'
import SignUpForm from './signUpForm/signUpForm'

const Aside = () => {
	const { push } = useRouter()
	const [isHaveAnAccount, setIsHaveAnAccount] = useState(false)

	return (
		<aside>
			<div className='container'>
				<div className='header'>
					<h1>
						<span>Eco</span>-Planner
					</h1>
					<h3>
						{isHaveAnAccount ? <>Sign up </> : <>Login </>} to Eco-Planner
					</h3>
					<span>Please enter your login details below.</span>
				</div>
				{isHaveAnAccount ? <SignUpForm /> : <LoginForm />}
				<button
					onClick={() => setIsHaveAnAccount(!isHaveAnAccount)}
					className='hover:underline'
				>
					{isHaveAnAccount
						? 'Already have an account?'
						: 'Don’t have an account?'}
				</button>
			</div>
		</aside>
	)
}

export default Aside
