export function userLoggedIn(reduxState) {
	return reduxState.login.jwt
}

export function userName(reduxState) {
	return reduxState.login.name
}
