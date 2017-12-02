// Listing 5.4 Adding and removing an event listener
class Note extends React.Component {
	confirmLeave(e) {
		let confirmationMessage = 'Do your really want to close?'
		e.returnValue = confirmationMessage		// Gecko, Trident, Chrome 34+
		return confirmaitonMessage				// Gecko, WebKit, Chrome < 34
	}
	componentDidMount() {
		console.log('Attaching confirmLeave event listener for beforeunload')
		window.addEventListener('beforeunload', this.confirmLeave)
	}
	componentWillUnmount() {
		console.log('Removing confirmLeave event listener for beforeunload')
		window.removeEventListener('beforeunload', this.confirmLeave)
	}
	render() {
		console.log('Render')
		return <div>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</div>
	}
}

let secondsLeft = 5

let interval = setInterval(() => {
	if (secondsLeft == 0) {
		ReactDOM.render(
			<div>Note was removed after {secondsLeft} seconds.</div>,
			document.getElementById('chap05a')
		)
		clearInterval(interval)
	} else {
		ReactDOM.render(
			<div><Note secondsLeft={secondsLeft} /></div>,
			document.getElementById('chap05a')
		)
	}
	secondsLeft--
}, 1000)

// Listing 5.3 Fetching data to display in a table
class Users extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
	}
	componentDidMount() {
		console.log(this.props['data-url'])
		fetch(this.props['data-url'])
			.then((response)=>response.json())
			.then((users)=>this.setState({users: users}))
	}
	render() {
		return <div className="container">
			<h1>List of Users</h1>
			<table className="table-striped table-condensed table table-bordered table-hover">
				<tbody>{this.state.users.map((user)=>
					<tr key={user.id}>
						<td>{user.first_name} {user.last_name}</td>
						<td>{user.email}</td>
						<td>{user.ip_address}</td>
					</tr>)}
				</tbody>
			</table>
		</div>
	}
}

// 5.3 Implementing an event
class Content0 extends React.Component {
	componentWillMount() {
		console.log("Content0:componentWillMount()")
		console.log(ReactDOM.findDOMNode(this))
	}
	componentDidMount() {
		console.log("Content0:componentDidMount()")
		console.dir(ReactDOM.findDOMNode(this))
	}
	render() {
		return (
			null
		)
	}
}

// Listing 5.2 Observing component lifecycle events
class Logger extends React.Component {
	constructor(props) {
		super(props)
		console.log('Logger:constructor')
	}
	componentWillMount() {
		console.log('Logger:componentWillMount is triggered')
	}
	componentDidMount(e) {
		console.log('Logger:componentDidMount is triggered')
		console.log('DOM node: ', ReactDOM.findDOMNode(this))
	}
	componentWillReceiveProps(newProps) {
		console.log('Logger:componentWillReceiveProps is triggered')
		console.log('new props: ', newProps)
	}
	shouldComponentUpdate(newProps, newState) {
		console.log('Logger:shouldComponentUpdate is triggered')
		console.log('new props: ', newProps)
		console.log('new state: ', newState)
		return true
	}
	componentWillUpdate(newProps, newState) {
		console.log('Logger:componentWillUpdate is triggered')
		console.log('new props: ', newProps)
		console.log('new state: ', newState)
	}
	componentDidUpdate(oldProps, oldState) {
		console.log('Logger:componentDidUpdate is triggered')
		console.log('old props: ', oldProps)
		console.log('old state: ', oldState)
	}
	componentWillUnmount() {
		console.log('Logger:componentWillUnmount')
	}
	render() {
		// console.log('rendering... Display')
		console.log(this.props.time)
		return (
			<div>{this.props.time}</div>
		)
	}
}

// Listing 5.1 Rendering and updating a Logger component three times
class Content extends React.Component {
	constructor(props) {
		super(props)
		this.launchClock()
		this.state = {
			counter: 0,
			currentTime: (new Date()).toLocaleString()
		}
	}
	launchClock() {
		setInterval(() => {
			this.setState({
				counter: ++this.state.counter,
				currentTime: (new Date()).toLocaleString()
			})
		}, 1000)
	}
	render() {
		if (this.state.counter > 2) return null
		return <Logger time={this.state.currentTime}></Logger>
	}
}

ReactDOM.render(
	<div>
		<Users data-url="real-user-data.json"/>
		<Content />
		<Content0 />
	</div>,
	document.getElementById('chap05')
)
