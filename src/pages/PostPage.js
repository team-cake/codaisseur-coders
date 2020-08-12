import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPost } from '../store/postpage/actions'
import { selectPostAndComments } from '../store/postpage/selectors'

export default function PostPage() {
	const dispatch = useDispatch()
	const { id } = useParams()

	useEffect(() => {
		dispatch(fetchPost(id))
	}, [dispatch, id])

	const postData = useSelector(selectPostAndComments)
	console.log('what is dit', postData)
	return <div>Nothing to see here yet {id}</div>
}
