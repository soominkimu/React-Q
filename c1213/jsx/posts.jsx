// Listing 13.13 Posts implementation with data from props.route

const {Link} = require('react-router')
const React = require('react')

module.exports = function Posts(props) {
	return <div>Posts
		<ol>
			{props.route.posts.map((post, index)=>
				<li key={post.slug}><Link to={`/posts/${post.slug}`}>{post.title}</Link></li>
			)}
		</ol>
	</div>
}
