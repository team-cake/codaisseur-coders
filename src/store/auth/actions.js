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
		console.log('what is email', email)
		console.log('what is password', password)
		console.log('TODO: make login request, get an access token', response)
		console.log('JAW PLEASE', response.data.jwt)
		dispatch({ type: 'LOGIN', payload: response.data.jwt })
	}
}
