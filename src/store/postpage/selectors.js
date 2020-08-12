export function selectPostAndComments(reduxState) {
	return reduxState.postpage.loading
		? null
		: {
				post: reduxState.postpage.post,
				comments: reduxState.postpage.comments,
		  }
}
