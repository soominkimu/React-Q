// 7.1.1 Defining a form and its events in React
// Listing 7.1 Rendering radio buttons and handling changes (p.146)
class Content71 extends React.Component {
	constructor(props) {
		super(props)
		this.handleRadio			= this.handleRadio.bind(this)
		this.handleCheckbox			= this.handleCheckbox.bind(this)
		this.handleChange			= this.handleChange.bind(this)
		this.handleInput			= this.handleInput.bind(this)
		this.handleSubmit			= this.handleSubmit.bind(this)
		this.handleSelectChange		= this.handleSelectChange.bind(this)
		this.handleFirstNameChange	= this.handleFirstNameChange.bind(this)
		this.state = {
			description: `With the right pattern, applications will be more scalable and easier to maintain. If you aspire one day to become a Node.js architect (or mayby you're already one and want to extend your knowledge), this presentation is for you.`,
			radioGroup: {
				angular: false,
				react: true,
				polymer: false
			},
			checkboxGroup: {
				node: false,
				react: true,
				express: false,
				mongodb: false
			},
			selectedValue: 'node'
		}
	}
	handleRadio(event) {
		let obj = {}
		obj[event.target.value] = event.target.checked	// true
		this.setState({radioGroup: obj})
	}
	handleCheckbox(event) {
		let obj = this.state.checkboxGroup
		obj[event.target.value] = event.target.checked	// true or false
		this.setState({checkboxGroup: obj})
	}
	handleChange(event) {
		console.log('onChange event: ', event.target.value, event.target.checked)
	}
	handleInput(event) {
		console.log('onInput event: ', event.target.value, event.target.checked)
	}
	handleFirstNameChange(event) {
		this.setState({fisrtName: event.target.value})
	}
	handleSubmit(event) {
		console.log(event.target.value, event.target.checked)
		fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
			.then((response)=>{return response.json()})
			.then((data)=>{console.log('Submitted: ', data)})
	}
	handleSelectChange(event) {
		this.setState({selectedValue: event.target.value})
		console.log(event.target.value, event.target.checked)
	}
	render() {
		return <div className="container">
			<form onSubmit={this.handleSubmit}>
				<h2>input: text</h2>
				<input type="text" name="new-book-title" defaultValue="Node: The Best Parts"/>
				<hr/>
				<h2>input: password</h2>
				<label>
					<input type="radio" name="radioGroup" value='angular' checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
					Angular
				</label>
				<br/>
				<label>
					<input type="radio" name="radioGroup" value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
					React
				</label>
				<label>
					<input type="radio" name="radioGroup" value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
					Polymer
				</label>
				<hr/>
// Listing 7.2 Defining check boxes
				<h2>input: checkbox</h2>
				<label>
					<input
						type="checkbox"
						name="checkboxGroup"
						value='node'
						checked={this.state.checkboxGroup['node']}
						onChange={this.handleCheckbox}/>
					Node
				</label>
				<br/>
				<label>
					<input
						type="checkbox"
						name="checkboxGroup"
						value='react'
						checked={this.state.checkboxGroup['react']}
						onChange={this.handleCheckbox}/>
					React
				</label>
				<br/>
				<label>
					<input
						type="checkbox"
						name="checkboxGroup"
						value='express'
						checked={this.state.checkboxGroup.express}
						onChange={this.handleCheckbox}/>
					Express
				</label>
				<br/>
				<label>
					<input
						type="checkbox"
						name="checkboxGroup"
						value='mongodb'
						checked={this.state.checkboxGroup['mongodb']}
						onChange={this.handleCheckbox}/>
					MongoDB
				</label>
				<hr/>
				<tetarea
					name="description"
					defaultValue={this.state.description}
					onChange={this.handleChange}/>
				<hr/>
				<textarea
					name="description1"
					defaultValue={"Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework"}
					onChange={this.handleChange}/>
				<hr/>
// Listing 7.3 Rendering form elements
				<select value={this.state.selectedValue} onChange={this.handleSelectChange}>
					<option value="ruby">Ruby</option>
					<option value="node">Node</option>
					<option value="python">Python</option>
				</select>
				<hr/>
// Figure 7.7 Rendering and preselecting multiselect elements
				<select multiple={true} defaultValue={['meteor', 'react']} readOnly>
					<option value="meteor">Meteor</option>
					<option value="react">React</option>
					<option value="jQuery">jQuery</option>
				</select>
				<hr/>
// Listing 7.5 Rendering form elements
				<h2>input: first name [text]</h2>
				<input type="text" name="first-name" onChange={this.handleFirstNameChange}/>
				<hr/>
				<h2>input: button</h2>
				<input type="button" defaultValue="Send" onClick={this.handleSubmit}/>
				<hr/>
				<input type="text" name="title" value="Mr." />
			</form>
		</div>
	}
}

// 7.1.4 Account field example (p.153)
// Listing 7.6 Implementing a controlled component
class Content76 extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {accountNumber: ''}
	}
	handleChange(event) {
		console.log('Typed: ', event.target.value)
		this.setState({accountNumber: event.target.value.replace(/[^0-9]/ig, '')})
	}
	render() {
		return <div>
			Account Number:
			<input
				type="text"
				onChange={this.handleChange}
				placeholder="123456"
				value={this.state.accountNumber}/>
			<br/>
			<span>{this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber: ''}</span>
		</div>
	}
}

// 7.2.1 Uncontrolled elements with change capturing
// Listing 7.7 Uncontrolled element that captures changes
class Content77 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {textbook: ''}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		console.log(event.target.value)
		this.setState({textbook: event.target.value})
	}
	render() {
		return <div>
			<input
				type="text"
				onChange={this.handleChange}
				placeholder="Eloquent TypeScript: Myth or Reality" />
			<br />
			<span>{this.state.textbook}</span>
		</div>
	}
}

// 7.2.2 Uncontrolled elements without capturing changes
// 7.2.3 Using references to access values
// Listing 7.8 Beginning of the email form
class Content78 extends React.Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
		this.prompt = 'Please enter your email to win $1,000,000.'
	}
	submit(event) {
		let emailAddress = this.refs.emailAddress
		let comments = this.refs.comments
		console.log(ReactDOM.findDOMNode(emailAddress).value)
		console.log(ReactDOM.findDOMNode(comments).value)
	}
// Listing 7.9 render() method of the email form
	render() {
		return (
			<div className="well">
				<p>{this.prompt}</p>
				<div className="form-group">
					Email: <input ref="emailAddress" className="form-control" type="text" placeholder="soominkimu@gmail.com"/>
				</div>
				<div className="form-group">
					Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
				</div>
				<div className="form-group">
					<a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<Content71 data-url="https://webapplog.com" />
		<Content76 />
		<Content77 />
		<Content78 />
	</div>,
	document.getElementById('chap07')
)

