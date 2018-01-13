// Chap.10 Project: Tooltip component
class Tooltip extends React.Component {
	constructor(props) {
		super(props)
		this.state = {opacity: 0}
		this.toggle = this.toggle.bind(this)
	}
	toggle() {
		const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this)
		this.setState({
			opacity: (this.state.opacity === 0) ? 0.5 : 0,
			top,
			left
		})
	}
	render() {
		const style = {
			zIndex: (this.state.opacity) ? 1000 : -1000,	// CSS z-index
			opacity: this.state.opacity,
			top: (this.state.top || 0) + 20,
			left: (this.state.left || 0) - 30
		}
		return (
			<div style={{display: 'inline'}}>
				<span style={{color: 'blue'}}
					onMouseEnter={this.toggle}
					onMouseOut={this.toggle}>
					{this.props.children}
				</span>
				<div className="tooltip bottom"
					style={style}
					role="tooltip">
					<div className="tooltip-arrow"></div>
					<div className="tooltip-inner">
						{this.props.text}
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<h1>Tooltip Widge</h1>
		The book <Tooltip text="The book you're reading now">React Quickly </Tooltip>
		was published in 2017. It's not so good...'<br/>
		You know, <Tooltip text="馬鹿なやつ、阿呆、プログラマー">Soomin Kimu </Tooltip>
		advocates React!
	</div>,
	document.getElementById('chap10')
)
