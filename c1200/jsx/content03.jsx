const React = require('react')
const ReactDOM = require('react-dom')

class Content03 extends React.Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}
	submit(event) {
		let emailAddress = this.refs.emailAddress
		let comments = this.refs.comments
		console.log(ReactDOM.findDOMNode(emailAddress).value)
		console.log(ReactDOM.findDOMNode(comments).value)
	}
	render() {
		this.prompt = 'Please enter your email to win a Sublime license'
		return (
			<div className="well">
				<p>{this.prompt}</p>
				Email: <input ref="emailAddress" className="form-control" type="text" placeholder="soominkimu@gmail.com"/>
			</div>
			<div className="form-group">
				Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
			</div>
			<div className="form-group">
				<a className="btn btn-primary" onClick={this.submit}>Submit</a>
			</div>
		)
	}
}
