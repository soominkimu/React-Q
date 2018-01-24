// Listing 13.11 Calling router.push() to navigate

const React = require('react')
const PropTypes = require('prop-types')

module.exports = function Contact(props) {
	setTimeout(()=>{props.router.push('about')}, 1000)
	return <div>
		<h3>Contact Us</h3>
		<input type="text" placeholder="your email" className="form-control"></input>
		<textarea type="text" placeholder="your message" clasName="form-control"></textarea>
		<button className="btn btn-primary">send</button>
	</div>
}

module.exports.propTypes = {
	router: PropTypes.object.isRequired
}

