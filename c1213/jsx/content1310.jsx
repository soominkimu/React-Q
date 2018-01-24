// Listing 13.10 Complete Content component
const React = require('react')
const {Link} = require('react-router')
const PropTypes = require('prop-types')

class Content1310 extends React.Component {
	render() {
		return (
			<div>
				<h1>Node.University</h1>
				<div className="navbar navbar-default">
					<ul className="nav nav-pills navbar-nav">
						<li className={(this.context.router.isActive('/about'))?'active':''}>
							<Link to="/about" activeClassName="active">
								About
							</Link>
						</li>
						<li className={(this.context.router.isActive('/posts'))?'active':''}>
							<Link to="/posts" activeClassName="active">
								Blog
							</Link>
						</li>
						<li className={(this.context.router.isActive('/contact'))?'active':''}>
							<Link to="/contact" activeClassName="active">
								Contact Us
							</Link>
						</li>
						<li>
							<Link to="/login" activeClassName="active">
								Login
							</Link>
						</li>
					</ul>
				</div>
				{this.props.children}
			</div>
		)
	}
}

Content1310.contextType = {
	router: PropTypes.object.isRequired
}
Content1310.propTypes = {
	children: PropTypes.object
}
module.exports = Content1310
