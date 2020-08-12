import { combineReducers } from 'redux'
import feedSliceReducer from './postfeed/reducer'
import postpageSliceReducer from './postpage/reducer'

const reducer = combineReducers({
	feed: feedSliceReducer,
	postpage: postpageSliceReducer,
})

export default reducer
