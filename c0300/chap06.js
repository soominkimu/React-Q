// Listing 6.1 Declaring an event handler as a class method
class SaveButton1 extends React.Component {
	handleSave(event) {
		console.log(this, event)
	}
	render() {
		return <button onClick={this.handleSave.bind(this)}>Save1</button>
	}
}

// constructor binding
class SaveButton2 extends React.Component {
	constructor(props) {
		super(props)
		this.handleSave = this.handleSave.bind(this)
	}
	handleSave(event) {
		console.log(this, event)
	}
	render() {
		return <button onClick={this.handleSave}>Save2</button>
	}
}

// 6.1.1 Capture and bubbling phases
class Mouse1 extends React.Component {
	render() {
		return <div>
			<div
				style={{border: '1px solid red'}}
				onMouseOver={()=>{console.log('mouse is over')}}>
				(1) Open DevTools and move your mouse cursor over here
			</div>
		</div>
	}
}

// Listing 6.2 Capture event following by bubbling event
class Mouse2 extends React.Component {
	render() {
		return <div>
			<div
				style={{border: '3px solid red'}}
				onMouseOverCapture={((event)=>{
					console.log('mouse over on capture event')
					console.dir(event, this)}).bind(this)}
				onMouseOver={((event)=>{
					console.log('mouse over on bubbling event')
					console.dir(event, this)}).bind(this)} >
					(2) Open DevTools and move your mouse cursor over here
			</div>
		</div>
	}
}

// Listing 6.3 Event handler receiving a synthetic event
class Mouse3 extends React.Component {
	render() {
		return <div>
			<div
				style={{border: '3px solid blue'}}
				onMouseOverCapture={((event)=>{
					console.log('mouse3 is over with event')
					console.dir(event)})} >
					(3) Open DevTools and move your mouse cursor over here
			</div>
		</div>
	}
}

// Listing 6.4 Event handler as a class method; binding in render()
class Mouse4 extends React.Component {
	handleMouseOver(event) {
		console.log('mouse4 is over with event')
		console.dir(event.target)
	}
	render() {
		return <div>
			<div
				style={{border: '1px solid blue'}}
				onMouseOver={this.handleMouseOver.bind(this)} >
					(4) Open DevTools and move your mouse cursor over here
			</div>
		</div>
	}
}

// Listing 6.5 Nullifying a synthetic event
class Mouse5 extends React.Component {
	handleMouseOver(event) {
		console.log('mouse5 is over with event')
		window.e = event	// Anti-pattern
		console.dir(event.target)
		setTimeout(()=>{
			console.table(event.target)
			console.table(window.e.target)
		}, 2345)
	}
	render() {
		return <div>
			<div
				style={{border: '1px solid magenta'}}
				onMouseOver={this.handleMouseOver.bind(this)} >
					(5) Open DevTools and move your mouse cursor over here
			</div>
		</div>
	}
}

// Listing 6.6 Updating state as a result of a click action
class Content1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {counter: 0}
	}
	handleClick(event) {
		this.setState({counter: ++this.state.counter})
	}
	render() {
		return (
			<div>
				<button
					onClick={this.handleClick.bind(this)}
					className="btn btn-primary">
					(1) Don't click me {this.state.counter} times!
				</button>
			</div>
		)
	}
}

// Listing 6.7 Stateless button component
class ClickCounterButton2 extends React.Component {
	render() {
		return <button
			onClick={this.props.handler}
			className="btn btn-danger">
			(2) Increase Volume (Current volume is {this.props.counter})
		</button>
	}
}

// Listing 6.8 Passing an event handler as a property
class Content2 extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)	// Binds the context in the constructor
		this.state = {counter: 0}						// so you can use this.setState(),
	}													// which refers to the instance of this Content class
	handleClick(event) {
		this.setState({counter: ++this.state.counter})
	}
	render() {
		return (
			<div>
				<ClickCounterButton2
					counter={this.state.counter}
					handler={this.handleClick} />
			</div>
		)
	}
}

// Listing 6.9 Button component using an event handler from Content
//class ClickCounterButton3 extends React.Component {
//	render() {
//		return <button
//			onClick={this.props.handler}
//			className="btn btn-info">
//			(3) Don't touch me with your dirty hands!
//		</button>
//	}
//}

const ClickCounterButton3 = (props) => {
	return <button
		onClick={props.handler}
		className="btn btn-info">
		(3) Don't touch me with your dirty hands!
	</button>
}

//class Counter3 extends React.Component {
//	render() {
//		return <span>Clicked {this.props.value} times.</span>
//	}
//}

const Counter3 = (props) => {
	return <span>Clicked {props.value} times.</span>
}

// Listing 6.10 Passing an event handler and state to two components
class Content3 extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {counter: 0}
	}
	handleClick(event) {
		this.setState({counter: ++this.state.counter})
	}
	render() {
		return (
			<div>
				<ClickCounterButton3 handler={this.handleClick} />
				<br/>
				<Counter3 value={this.state.counter} />
			</div>
		)
	}
}

// Listing 6.11 Using lifecycle evnets to listen to DOM events
// Requires "css/radio.css"
class Radio extends React.Component {
	constructor(props) {
		super(props)
		this.handleResize = this.handleResize.bind(this)
		let order = props.order
		let i = 1
		this.state = {
			outerStyle:		this.getStyle(4, i),
			innerStyle:		this.getStyle(1, i),
			selectedStyle:	this.getStyle(2, i),
			taggerStyle: {top: order*20, width: 25, height: 25}
		}
	}
	getStyle(i, m) {
		let value = i*m
		return {
			top:	value,
			bottom:	value,
			left:	value,
			right:	value
		}
	}
	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}
	handleResize(event) {
		let w = 1 + Math.round(window.innerWidth / 300)
		this.setState({
			taggerStyle: {top: this.props.order*w*10, width: w*10, height: w*10},
			textStyle: {left: w*13, fontSize: 7*w}
		})
	}
	render() {
		return <div>
			<div className="radio-tagger" style={this.state.taggerStyle}>
				<input type="radio" name={this.props.name} id={this.props.id}>
				</input>
				<label htmlFor={this.props.id}>
					<div className="radio-text" style={this.state.textStyle}>{this.props.label}</div>
					<div className="radio-outer" style={this.state.outerStyle}>
						<div className="radio-inner" style={this.state.innerStyle}>
							<div className="radio-selected" style={this.state.selectedStyle}>
							</div>
						</div>
					</div>
				</label>
			</div>
		</div>
	}
}

// Listing 6.13 Integrating with a jQuery plug-in via its evetns
class SliderButtons extends React.Component {
	constructor(props) {
		super(props)
		this.state = {sliderValue: 0}
		this.handleSlide	= this.handleSlide.bind(this)
		this.handleChange	= this.handleChange.bind(this)
	}
	handleSlide(event, ui) {
		this.setState({sliderValue: ui.value})
	}
	handleChange(value) {
		return () => {
			$('#slider').slider('value', this.state.sliderValue + value)
			this.setState({sliderValue: this.state.sliderValue + value})
		}
	}
	componentDidMount() {
		$('#slider').on('slide', this.handleSlide)
	}
	componentWillUnmount() {
		$('#slider').off('slide', this.handleSlide)
	}
	render() {
		return <div>
			<button disabled={(this.state.sliderValue<1) ? true : false}
				className="btn default-btn"
				onClick={this.handleChange(-1)}>
					1 Less ({this.state.sliderValue-1})
			</button>
			<button disabled={(this.state.sliderValue>99) ? true : false}
				className="btn default-btn"
				onClick={this.handleChange(1)}>
					1 More ({this.state.sliderValue+1})
			</button>
		</div>
	}
}

// Listing 6.15 Integration with a jQuery plug-in via window
class SliderValue extends React.Component {
	constructor(props) {
		super(props)
		this.handleSlide = this.handleSlide.bind(this)
		this.state = {sliderValue: 0}
	}
	handleSlide(event) {
		this.setState({sliderValue: event.detail.ui.value})
	}
	componentDidMount() {
		window.addEventListener('slide', this.handleSlide)
	}
	componentWillUnmount() {
		window.removeEventListener('slide', this.handleSlide)
	}
	render() {
		return <div className="">
			Value: {this.state.sliderValue}
		</div>
	}
}

//ReactDOM.render(
//	<div>
//		<Radio name="radio-group" id="radio1" order="1" label="Credit card" />
//		<Radio name="radio-group" id="radio2" order="2" label="PayPal" />
//		<Radio name="radio-group" id="radio3" order="3" label="Check" />
//	</div>,
//	document.getElementById('chap06a')
//)

ReactDOM.render(
	<div>
		<SliderButtons />
		<SliderValue />
		<Content3 />
		<Content2 />
		<Content1 />
		<Mouse5 />
		<Mouse4 />
		<Mouse3 />
		<Mouse2 />
		<Mouse1 />
		<SaveButton1 />
		<SaveButton2 />
	</div>,
	document.getElementById('chap06')
)

