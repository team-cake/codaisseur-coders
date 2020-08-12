import React, { useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchNext5Posts } from '../../store/postfeed/actions'
import {
	selectFeedLoading,
	selectFeedPosts,
} from '../../store/postfeed/selectors'

import './PostFeed.css'

export default function PostFeed() {
	const dispatch = useDispatch()

	const loading = useSelector(selectFeedLoading)
	const posts = useSelector(selectFeedPosts)

	useEffect(() => {
		dispatch(fetchNext5Posts)
	}, [dispatch])

	return (
		<div className='PostsFeed'>
			<h2>Recent posts</h2>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						<Link to={`/post/${post.id}`}>
							<h3>{post.title}</h3>
						</Link>
						<p className='meta'>
							{moment(post.createdAt).format('DD-MM-YYYY')} &bull;{' '}
							{/* {post.post_likes.length} likes &bull;{' '} */}
							<span className='tags'>
								{post.tags.map((tag) => {
									return (
										<React.Fragment key={tag.id}>
											<span className='Tag'>{tag.tag}</span>{' '}
										</React.Fragment>
									)
								})}
							</span>
						</p>
					</div>
				)
			})}
			<p>
				{loading ? (
					<em>Loading...</em>
				) : (
					<button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
				)}
			</p>
		</div>
	)
}
