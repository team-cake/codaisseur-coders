export function selectPostAndComments(reduxState) {
	return reduxState.postpage.loading
		? null
		: {
				post: reduxState.postPage.post,
				comments: reduxState.postPage.comments,
		  }
}
