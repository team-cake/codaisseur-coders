import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchPost } from '../store/postpage/actions'

export default function PostPage() {
	const dispatch = useDispatch()
	const { id } = useParams()

	useEffect(() => {
		dispatch(fetchPost(id))
	}, [dispatch, id])

	return <div>Nothing to see here yet {id}</div>
}
