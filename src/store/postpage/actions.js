import axios from 'axios'

const API_URL = `https://codaisseur-coders-network.herokuapp.com`

export function startLoadingPost() {
	return {
		type: 'FEED_STARTLOADINGPOST',
	}
}

export function postFullyFetched(data) {
	return {
		type: 'FEED_POSTFULLYFETCHED',
		payload: data,
	}
}

export function fetchPost(id) {
	return async function thunk(dispatch, getState) {
		dispatch(startLoadingPost())

		const [postResponse, commentsResponse] = await Promise.all([
			axios.get(`${API_URL}/posts/${id}`),
			axios.get(`${API_URL}/posts/${id}/comments`),
		])
		console.log(postResponse, commentsResponse)

		dispatch(
			postFullyFetched({
				post: postResponse.data,
				comments: commentsResponse.data,
			})
		)
	}
}
