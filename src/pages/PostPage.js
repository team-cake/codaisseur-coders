import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostPage() {
	const { id } = useParams()

	return <div>Nothing to see here yet {id}</div>
}
