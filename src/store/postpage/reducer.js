const initialState = {
	loading: true,
	post: null,
	comments: [],
}

export default function feedSliceReducer(state = initialState, action) {
	switch (action.type) {
		case 'POST_STARTLOADING': {
			return {
				...state,
				loading: true,
			}
		}
		case 'POST_FULLYFETCHED': {
			return {
				loading: false,
				post: action.payload.post,
				comments: action.payload.comments,
			}
		}
		default: {
			return state
		}
	}
}
