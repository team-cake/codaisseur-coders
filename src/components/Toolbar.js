import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedIn } from '../store/auth/selectors'
import { userName } from '../store/auth/selectors'

export default function Toolbar() {
	const loggedIn = useSelector(userLoggedIn)
	const name = useSelector(userName)
	const dispatch = useDispatch()
	const logoutHandler = () => {
		console.log('please logout')
		dispatch({ type: 'LOGOUT' })
	}
	return (
		<div>
			this is the trololololbar
			{loggedIn === null ? (
				<Link to={`/login`}>
					<h3>Login</h3>
				</Link>
			) : (
				<div>
					<h1>Welcome {name}</h1>
					<button onClick={logoutHandler}>Logout</button>
				</div>
			)}
			<Link to={`/`}>
				<h3>Home</h3>
			</Link>
		</div>
	)
}
