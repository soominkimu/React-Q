// Chap. 4 Making React Interactive with States
const DigitalDisplay = function(props) {
	const locale = time => (new Date(time)).toLocaleString('EU')
	return <div>{locale(props.time)}</div>
}

const AnalogDisplay = function AnalogDisplay(props) {
	let date = new Date(props.time)
	let sDeg = (date.getSeconds()/60)*360 - 90
	let mDeg = (date.getMinutes()/60)*360 + sDeg/60 - 90	// adjust for the seconds
	let hDeg = (date.getHours()/12)*360 + mDeg/60 - 90		// adjust for the minutes and seconds
	let dialStyle = {
		position: 'relative',
		top: 0,
		left: 0,
		width: 200,
		height: 200,
		borderRadius: 20000,
		borderStyle: 'solid',
		borderColor: 'black'
	}
	let secondHandStyle = {
		position: 'relative',
		top: 100,
		left: 100,
		border: '1px solid red',
		width: '40%',
		height: 1,
		transform: 'rotate(' + sDeg.toString() + 'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'red'
	}
	let minuteHandStyle = {
		position: 'relative',
		top: 100,
		left: 100,
		border: '1px solid grey',
		width: '40%',
		height: 3,
		transform: 'rotate(' + mDeg.toString() + 'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'grey'
	}
	let hourHandStyle = {
		position: 'relative',
		top: 92,
		left: 106,
		border: '1px solid grey',
		width: '20%',
		height: 7,
		transform: 'rotate(' + hDeg.toString() + 'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'grey'
	}
	return <div>
		<div style={dialStyle}>
			<div style={secondHandStyle} />
			<div style={minuteHandStyle} />
			<div style={hourHandStyle} />
		</div>
	</div>
}

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.launchClock()
		this.state = {
			currentTime: (new Date()).toLocaleString(),
			count: 0
		}
	}
	launchClock() {
		setInterval(() => {
			if (this.state.count++ % 10 === 0 && this.state.count < 100) {
				console.log(`Updating time... count:${this.state.count} ${this.state.currentTime}`)
			}
			this.setState({
				currentTime: (new Date()).toLocaleString()
			})
		}, 1000)
	}
	render() {
		//	console.log('Rendering Clock...')
		return <div>
			<AnalogDisplay	time={this.state.currentTime} />
			<DigitalDisplay	time={this.state.currentTime} />
		</div>
	}
}

ReactDOM.render(
	<div>
		<Clock />
	</div>,
	document.getElementById('chap04')
)

