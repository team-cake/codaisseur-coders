const initialState = {
	me: null, // the logged-in user
	jwt: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			console.log('step 7: login case')
			return { ...state, jwt: action.payload }

		case 'USERLOGGEDIN':
			return {
				...state,
				...action.payload,
			}

		case 'LOGOUT':
			return initialState

		default:
			return state
	}
}
