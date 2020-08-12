const initialState = {
	loading: true,
	post: null,
	comments: [],
}

export default function postpageSliceReducer(state = initialState, action) {
	switch (action.type) {
		case 'POST_STARTLOADING': {
			return {
				loading: true,
				post: null,
				comments: [],
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
