import { combineReducers } from 'redux'
import feedSliceReducer from './postfeed/reducer'
import postpageSliceReducer from './postpage/reducer'
import authReducer from './auth/reducer'

const reducer = combineReducers({
	feed: feedSliceReducer,
	postpage: postpageSliceReducer,
	login: authReducer,
})

export default reducer
