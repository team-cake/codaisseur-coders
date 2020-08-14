import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedIn } from '../store/auth/selectors'
import { userName } from '../store/auth/selectors'
import { bootstrapLoginState } from '../store/auth/actions'
import { logout } from '../store/auth/actions'

export default function Toolbar() {
	const loggedIn = useSelector(userLoggedIn)
	const name = useSelector(userName)
	const dispatch = useDispatch()
	const logOutUser = () => {
		dispatch(logout)
	}

	useEffect(() => {
		dispatch(bootstrapLoginState())
	}, [])
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
					<button onClick={logOutUser}>Logout</button>
				</div>
			)}
			<Link to={`/`}>
				<h3>Home</h3>
			</Link>
		</div>
	)
}
