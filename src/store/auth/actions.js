import axios from 'axios'

export function login(email, password) {
	// Return the thunk itself, i.e. a function
	return async function thunk(dispatch, getState) {
		// TODO:
		// make a POST API request to `/login`
		const response = await axios.post(
			`https://codaisseur-coders-network.herokuapp.com/login`,
			{ email, password }
		)

		dispatch({ type: 'LOGIN', payload: response.data.jwt })

		const meProfile = await axios.get(
			`https://codaisseur-coders-network.herokuapp.com/me`,
			{ headers: { Authorization: `Bearer ${response.data.jwt}` } }
		)
		dispatch({ type: 'USERLOGGEDIN', payload: meProfile.data.jwt })
		console.log('my profile', meProfile.data)
		// console.log('what is email', email)
		// console.log('what is password', password)
		// console.log('TODO: make login request, get an access token', response)
		// console.log('JAW PLEASE', response.data.jwt)
	}
}

// export function userLoggedIn(email, password) {
// 	// Return the thunk itself, i.e. a function
// 	return async function thunk(dispatch, getState) {
// 		// TODO:
// 		// make a POST API request to `/login`
// 		const response = await axios.post(
// 			`https://codaisseur-coders-network.herokuapp.com/login`,
// 			{ email, password }
// 		)

// 		const token = response.data.jwt
// 		console.log('the token', token)

// 		const meProfile = await axios.get(
// 			`https://codaisseur-coders-network.herokuapp.com/login`,
// 			{ headers: { Authorization: `Bearer ${token}` } }
// 		)
// 		console.log('what is email', email)
// 		console.log('what is password', password)
// 		console.log('TODO: make login request, get an access token', response)
// 		console.log('JAW PLEASE', response.data.jwt)

// 		dispatch({ type: 'USERLOGGEDIN', payload: meProfile })
// 	}
// }
