const initialState = {
	loading: false,
	posts: [],
}

export default function feedSliceReducer(state = initialState, action) {
	switch (action.type) {
		case 'FEED_STARTLOADING': {
			return {
				...state,
				loading: true,
			}
		}
		case 'FEED_POSTSFETCHED': {
			return {
				loading: false,
				posts: [...state.posts, ...action.payload],
			}
		}
		default: {
			return state
		}
	}
}
