const React = require('react')
const PropTypes = require('prop-types')

module.exports = class Router1304 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {hash: window.location.hash}
		this.updateHash = this.updateHash.bind(this)
	}
	updateHash(event) {
		console.log(event)
		this.setState({hash: window.location.hash})
	}
	componentDidMount() {
		window.addEventListener('hashchange', this.updateHash, false)
	}
	componentWillUnmount() {
		window.removeEventListener('hashchange', this.updateHash, false)
	}
	render() {
		console.log(this.props.mapping, this.state.hash)
		if (this.props.mapping[this.state.hash])
			return this.props.mapping[this.state.hash]
		else
			return this.props.mapping['*']
	}
}

module.exports.propTypes = {
	mapping: PropTypes.object
}
