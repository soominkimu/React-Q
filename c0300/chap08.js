// 8.1 Default properties in components
// p.166
class Button extends React.Component {
	render() {
		return <button className={this.props.buttonClass}>{this.props.buttonLabel}</button>
	}
}
Button.defaultProps = {buttonClass: 'btn btn-default'}
Button.defaultProps = {buttonLabel: 'Submit'}

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
	email(props, propName, componentName) {
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
				<Button buttonClass="btn btn-danger" mail="not-a-valid-email"/>
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

// Listing 8.5 HOCs sharing an event handler

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
	</div>,
	document.getElementById('chap08')
)
