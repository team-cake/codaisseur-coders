import axios from 'axios'

const API_URL = `https://codaisseur-coders-network.herokuapp.com`

export function startLoading() {
	return {
		type: 'FEED_STARTLOADING',
	}
}

export function postsFetched(morePosts) {
	return {
		type: 'FEED_POSTSFETCHED',
		payload: morePosts,
	}
}

export async function fetchNext5Posts(dispatch, getState) {
	dispatch(startLoading())

	const offset = getState().feed.posts.length

	const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`)

	const morePosts = res.data.rows

	dispatch(postsFetched(morePosts))
}
