require('../css/main.css')

const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const Content1203 = require('./content1203.jsx')
const Router1304 = require('./router1304.jsx')

const History = require('history')
const Content1310 = require('./content1310.jsx')
const About = require('./about.jsx')
const Contact = require('./contact.jsx')
const Login = require('./login.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')
const {withRouter} = require('react-router')

const posts = require('../posts.js')

let { Router,
	Route,
	Link
} = ReactRouter

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
	queryKey: false
})

const mapping = {
	'#profile': <div>Profile (<a href="#">home</a>)</div>,
	'#accounts': <div>Accounts (<a href="#">home</a>)</div>,
	'*': <div>Dashboard<br/>
		<a href="#profile">Profile</a>
		<br/>
		<a href="#accounts">Accounts</a>
	</div>
}

ReactDOM.render(
	<div>
		<Router history={hashHistory}>
			<Route path="/" component={Content1310}>
				<Route path="/about" component={About} />
				<Route path="/posts" component={Posts} posts={posts} />
				<Route path="/posts/:id" component={Post} posts={posts} />
				<Route path="/contact" component={withRouter(Contact)} />
			</Route>
			<Route path="/login" component={Login} />
		</Router>
		<Router1304 mapping = {mapping}/>
		<br />
		<Content1203 />
	</div>,
	document.getElementById('chap12')
)
