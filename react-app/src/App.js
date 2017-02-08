import React from 'react';

// State function:
class App extends React.Component {
	render(){
		let txt = this.props.txt

		// Can only return 1 element so we put everything under a div
		return (
			<div>
				<h1>{txt}</h1>
			</div>
		)
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: "This is the default text"
}

export default App; 






// Useful things to remember

// Stateless function: 
//const App = () => <h1 >Hello Stateless </h1>

//React.createElement('h1', null, 'hello guys') =  <h1>Hello worldieron </h1> 
