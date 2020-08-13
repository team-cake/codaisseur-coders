import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/auth/actions'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	function handleSubmit(event) {
		event.preventDefault()

		// TODO
		console.log('TODO login with:', email, password)
		dispatch(login(email, password))
	}

	const logoutHandler = () => {
		console.log('please logout')
		dispatch({ type: 'LOGOUT' })
	}

	return (
		<div>
			<center>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<p>
						<label>
							Email:{' '}
							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
					</p>
					<p>
						<label>
							Password:{' '}
							<input
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
					</p>
					<p>
						<button type='submit'>Login</button>
					</p>
				</form>
				<button onClick={logoutHandler}>Logout</button>
			</center>
		</div>
	)
}
