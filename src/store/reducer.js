import { combineReducers } from 'redux'
import feedSliceReducer from './postfeed/reducer'
import postpageSliceReducer

const reducer = combineReducers({
	feed: feedSliceReducer,
	postpage, postpageSliceReducer,
})

export default reducer
