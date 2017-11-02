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

ReactDOM.render(
	<div>
		<HelloWorld/>
		<DateTimeNow userName='Soomin'/>
		<HelloWorld2/>
		<ProfileLink url='/users/azat' label='Profile for Soomin'/>
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
		<Content/>
	</div>,
	document.getElementById('content')
)

