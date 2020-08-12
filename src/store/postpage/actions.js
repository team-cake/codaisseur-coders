import axios from 'axios'
import { API_URL } from '../../config'

export function startLoadingPost() {
	return {
		type: 'POST_STARTLOADING',
	}
}

export function postFullyFetched(data) {
	return {
		type: 'POST_FULLYFETCHED',
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
