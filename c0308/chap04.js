// Chap. 4 Making React Interactive with States
const DigitalDisplay = function(props) {
	const locale = time => (new Date(time)).toLocaleString('EU')
	return <div>{locale(props.time)}</div>
}

const AnalogDisplay = function AnalogDisplay(props) {
	let date = new Date(props.time)
	let sDeg = (date.getSeconds()/60)*360
	let mDg0 = (date.getMinutes()/60)*360		// adjust for the seconds
	let mDeg = mDg0 + sDeg/60		// adjust for the seconds
	let hDg0 = (date.getHours()/12)*360		// adjust for the minutes and seconds
	let hDeg = hDg0 + mDeg/12		// adjust for the minutes and seconds
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
		transform: 'rotate(' + (sDeg - 90).toString() + 'deg)',
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
		transform: 'rotate(' + (mDeg - 90).toString() + 'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'grey'
	}
	let minuteHandStyle0 = {
		...minuteHandStyle,
		top: 114,
		transform: 'rotate(' + (mDg0 - 90).toString() + 'deg)',
		backgroundColor: 'yellow'
	}
	let hourHandStyle = {
		position: 'relative',
		top: 92,
		left: 106,
		border: '1px solid grey',
		width: '20%',
		height: 7,
		transform: 'rotate(' + (hDeg - 90).toString() + 'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'grey'
	}
	let hourHandStyle0 = {
		...hourHandStyle,
		top: 106,
		transform: 'rotate(' + (hDg0 - 90).toString() + 'deg)',
		backgroundColor: 'cyan'
	}
	return <div>
		<div style={dialStyle}>
			<div style={secondHandStyle} />
			<div style={minuteHandStyle0} />
			<div style={hourHandStyle0} />
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

