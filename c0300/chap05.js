// 5.3 Implementing an event
class Content0 extends React.Component {
	componentWillMount() {
		console.log("componentWillMount()")
		console.log(ReactDOM.findDOMNode(this))
	}
	componentDidMount() {
		console.log("componentDidMount()")
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
		console.log('constructor')
	}
	componentWillMount() {
		console.log('componentWillMount is triggered')
	}
	componentDidMount(e) {
		console.log('componentDidMount is triggered')
		console.log('DOM node: ', ReactDOM.findDOMNode(this))
	}
	componentWillReceiveProps(newProps) {
		console.log('componentWillReceiveProps is triggered')
		console.log('new props: ', newProps)
	}
	shouldComponentUpdate(newProps, newState) {
		console.log('shouldComponentUpdate is triggered')
		console.log('new props: ', newProps)
		console.log('new state: ', newState)
		return true
	}
	componentWillUpdate(newProps, newState) {
		console.log('componentWillUpdate is triggered')
		console.log('new props: ', newProps)
		console.log('new state: ', newState)
	}
	componentDidUpdate(oldProps, oldState) {
		console.log('componentDidUpdate is triggered')
		console.log('old props: ', oldProps)
		console.log('old state: ', oldState)
	}
	componentWillUnmount() {
		console.log('componentWillUnmount')
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
		<Content />
		<Content0 />
	</div>,
	document.getElementById('chap05')
)


