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

ReactDOM.render(
	<div>
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

