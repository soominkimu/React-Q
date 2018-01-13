// 8.1 Default properties in components
// p.166
class Button extends React.Component {
	render() {
		return <button className={this.props.buttonClass}>{this.props.buttonLabel}</button>
	}
}
Button.defaultProps = {
	buttonClass: 'btn btn-default',
	buttonLabel: 'Submit'
}

// The parent component Content81
class Content81 extends React.Component {
	render() {
		return (
			<div>
				<Button buttonLabel="Start" />
				<Button />
				<Button />
				<Button />
			</div>
		)
	}
}

// 8.2 React property types and validation
// Listing 8.1 Using propTypes and defaultProps
Button.propTypes = {
	handler: PropTypes.func.isRequired,
	title: PropTypes.string,
	email(props, propName, componentName) {	// custom validation
		let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (!emailRegularExpression.test(props[propName])) {
			return new Error('Email validation failed!')
		}
	}
}

// Listing 8.2 Rendering six buttons
class Content82 extends React.Component {
	render() {
		let number = 1
		return (
			<div>
				<Button buttonClass="btn btn-primary" buttonLabel="Start"/>
				<Button />
				<Button title={number}/>
				<Button />
				<Button buttonClass="btn btn-danger" email="not-a-valid-email"/>
				<Button buttonClass="btn btn-success" email="soominkimu@gmail.com"/>
			</div>
		)
	}
}

// 8.3 Rendering children
//
class Content83 extends React.Component {
	render() {
		return (
			<div className="content">
				{this.props.children}
			</div>
		)
	}
}

// 8.4 Creating React higher-order components for code reuse
// Listing 8.4 Implementing a higher-order component
const LoadWebsite = (Component) => {
	class _LoadWebsite extends React.Component {
		constructor(props) {
			super(props)
			this.state = {label: 'Run'}
			this.state.handleClick = this.handleClick.bind(this)
		}
		getUrl() {
			return 'http://react.rocks'
		}
		handleClick(event) {
			var iframe = document.getElementById('frame').src = this.getUrl()
		}
		componentDidMount() {
			console.log(ReactDOM.findDOMNode(this))
		}
		render() {
			console.log(this.state)
			return <Component {...this.state} {...this.props} />
		}
	}
	_LoadWebsite.displayName = 'EnhancedComponent'
	return _LoadWebsite
}

class XButton extends React.Component {
	render() {
		return <button
			className="btn btn-primary"
			onClick={this.props.handleClick}>
			{this.props.label}
		</button>
	}
}

class XLink extends React.Component {
	render() {
		return <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
	}
}

class XLogo extends React.Component {
	render() {
		return <img onClick={this.props.handleClick} width="40" src="images/logo.png" href="#"/>
	}
}

// Listing 8.5 HOCs sharing an event handler
const EnhancedButton	= LoadWebsite(XButton)
const EnhancedLink		= LoadWebsite(XLink)
const EnhancedLogo		= LoadWebsite(XLogo)

class Content84 extends React.Component {
	render() {
		return (
			<div>
				<EnhancedButton />
				<EnhancedButton />
				<EnhancedButton />
				<br />
				<iframe id="frame" src="" width="600" height="500"/>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<Content81 />
		<Content82 />
		<Content83>
			<h1>React</h1>
			<p>Rocks</p>
		</Content83>
		<Content83>
			<img src="images/ShibaKao.png" width="100"/>
		</Content83>
		<Content83>
			<a href="http://react.rocks">http://react.rocks</a>
		</Content83>
		<Content83>
			<a className="btn btn-danger" href="http://react.rocks">http://react.rocks</a>
		</Content83>
		<Content84 />
	</div>,
	document.getElementById('chap08')
)
