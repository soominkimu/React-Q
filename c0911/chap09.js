// Chap. 9 Project: Menu component

// 9.2 Building the menu without JSX
class Menu92 extends React.Component {
	render() {
		let menus = [
			'Home92',
			'About',
			'Services',
			'Portfolio',
			'Contact us']
		return React.createElement('div',
			null,
			menus.map((v, i) => {
				return React.createElement('div',
					{key: i},
					React.createElement(Link92, {label: v})
				)
			})
		)
	}
}

class Link92 extends React.Component {
	render() {
		const url='/'
			+ this.props.label
				.toLowerCase()
				.trim()
				.replace(' ', '-')
		return React.createElement('div',
			null,
			React.createElement(
				'a',
				{href: url},
				this.props.label
			),
			React.createElement('br')
		)
	}
}

// 9.3 Building the menu in JSX
class Menu93 extends React.Component {
	render() {
		let menus = [
			'Home93',
			'About',
			'Services',
			'Portfolio',
			'Contact us']
		return <div>
			{menus.map((v, i) => {
				return <div key={i}><Link93 label={v}/></div>
			})}
		</div>
	}
}

class Link93 extends React.Component {
	render() {
		const url='/'
			+ this.props.label
				.toLowerCase()
				.trim()
				.replace(' ', '-')
		return <div>
			<a href={url}>{this.props.label}</a>
			<br/>
		</div>
	}
}

ReactDOM.render (
	React.createElement(
		Menu92,
		null
	),
	document.getElementById('chap09')
)

ReactDOM.render (
	<div>
		<br/>
		<Menu93 />
	</div>,
	document.getElementById('chap09a')
)

