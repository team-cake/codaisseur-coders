import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

import { fetchPost } from '../store/postpage/actions'
import { selectPostAndComments } from '../store/postpage/selectors'

export default function PostPage() {
	const dispatch = useDispatch()
	const { id } = useParams()

	useEffect(() => {
		dispatch(fetchPost(id))
	}, [dispatch, id])

	const postData = useSelector(selectPostAndComments)
	console.log('i need this', postData)
	return (
		<div>
			{' '}
			{!postData ? (
				<p>Loading...</p>
			) : (
				<>
					<h1>{postData.post.title}</h1>
					<p className='meta'>
						{moment(postData.post.createdAt).format('DD-MM-YYYY')} &bull;{' '}
						Author: {postData.post.developer.name} &bull;{' '}
						<span className='tags'>
							{postData.post.tags.map((tag) => {
								return (
									<React.Fragment key={tag.id}>
										<span className='Tag'>{tag.tag}</span>{' '}
									</React.Fragment>
								)
							})}
						</span>
					</p>

					<ReactMarkdown source={postData.post.content} />

					<h2>Comments</h2>
				</>
			)}
		</div>
	)
}
