import axios from 'axios'

export function login(email, password) {
	// Return the thunk itself, i.e. a function
	return async function thunk(dispatch, getState) {
		// TODO:
		// make a POST API request to `/login`
		try {
			const response = await axios.post(
				`https://codaisseur-coders-network.herokuapp.com/login`,
				{ email, password }
			)
			window.localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
			dispatch({ type: 'LOGIN', payload: response.data.jwt })

			const meProfile = await axios.get(
				`https://codaisseur-coders-network.herokuapp.com/me`,
				{ headers: { Authorization: `Bearer ${response.data.jwt}` } }
			)
			dispatch({ type: 'USERLOGGEDIN', payload: meProfile.data })

			console.log('local', localStorage)
			// console.log('my profile', meProfile.data)
			// console.log('what is email', email)
			// console.log('what is password', password)
			// console.log('TODO: make login request, get an access token', response)
			// console.log('JAW PLEASE', response.data.jwt)
		} catch (err) {
			console.log('error', err)
			localStorage.removeItem('jwt')
		}
	}
}

// export function bootstrapLoginState() {
// 	return async function thunk(dispatch, getState) {
// 		const getToken = await axios.get(localStorage.getItem('jwt'))
// 		console.log('tokkie', getToken)
// 	}
// }
