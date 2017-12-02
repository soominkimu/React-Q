// Listing 3.3 Creating a HelloWorld class in JSX
class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h3>1. Hello World!</h3>
				<h3>2. Hello World!</h3>
			</div>
		)
	}
}

// 3.2.3 Outputting variables in JSX
class DateTimeNow extends React.Component {
	render() {
		let dateTimeNow = new Date().toLocaleString()
		return <span>Hey {this.props.userName}, your current date and time is {dateTimeNow}.</span>
	}
}

// Listing 3.4
let helloWorldRE = <h3>Hello World!</h3>
class HelloWorld2 extends React.Component {
	render() {
		return <div>
			{helloWorldRE}
			{helloWorldRE}
		</div>
	}
}

// 3.2.4 Working with properties in JSX
class ProfileLink extends React.Component {
	render() {
		return <a href={this.props.url}
			title={this.props.label}
			target="_blank">Profile
		</a>
	}
}

// Listing 3.5 Working with properties
class HelloWorld3 extends React.Component {
	render() {
		return <h3 {...this.properties}>
			Hello {this.props.frameworkName} World!!!
		</h3>
	}
}

// Listing 3.6 Invoking a component method to get a URL
class Content extends React.Component {
	getUrl() {
		return 'http://webapplog.com'
	}
	render() {
		return (
			<div>
				<p>Your REST API URL is:
					<a href={this.getUrl()}>
						{this.getUrl()}
					</a>
				</p>
			</div>
		)
	}
}

// 3.4 React and JSX gotchas
class Gotchas extends React.Component {
	render() {
		let smallFont = {fontSize: '6pt'}
		return (
			<div>
				<span>&copy;&mdash;&ldquo;</span>
				<input defaultValue="&copy;&mdash;&ldquo;"/>
				<li data-object-id="097FE4F">data-attributes</li>
				<input style={smallFont} defaultValue="small font"/>
				<span style={{borderColor: 'red',
					borderWidth: 1,
					borderStyle: 'solid'}}>Hey</span>
				<span style={{border: '3px blue solid'}}>Hey</span>
				<input style={{border: '1px magenta solid'}} disabled={false} placeholder='disabled={false}'/>
				<input style={{border: '1px cyan solid'}} disabled="false" placeholder='disabled="false"'/>
			</div>
		)
	}
}

// 3.4.4 class and for
class RadioInput extends React.Component {
	render() {
		return (
			<div>
				<input type="radio" name={this.props.name} id={this.props.id}></input>
				<label htmlFor={this.props.id}>{this.props.label}</label>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<RadioInput name="Radio" id="3389741" label="What the Heck?"/>
		<Gotchas/>
		<Content/>
		<div>
			<HelloWorld3
				id='ember'
				frameworkName='Ember.js'
				title='A framework for creating ambitious web applications.'/>
			<HelloWorld3
				id='backbone'
				frameworkName='Backbone.js'
				title='Backbone.js gives structure to web applications...'/>
			<HelloWorld3
				id='angular'
				frameworkName='Angular.js'
				title='Superheroic Javascript MVW Framework'/>
		</div>
		<ProfileLink url='real-user-data.json' label='Profile for Soomin'/>
		<HelloWorld2/>
		<DateTimeNow userName='Soomin'/>
		<HelloWorld/>
	</div>,
	document.getElementById('chap03')
)

