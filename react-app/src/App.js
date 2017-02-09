import React from 'react';

// State function:
class App extends React.Component {

	constructor(){
		super();
		this.state = {
			txt: 'This is the state txt'
		}
	}

	update( e ) {
		this.setState({txt: e.target.value})
	}

	render(){
		//let txt = this.props.txt
		// Can only return 1 element so we put everything under a div
		return (
			<div>
				<h1>{this.state.txt}</h1>
				<Widget update={this.update.bind(this)} />
				<Widget update={this.update.bind(this)} />
				<Widget update={this.update.bind(this)} />
				<Widget update={this.update.bind(this)} />
			</div>
		)
	}
}


const Widget = (props) =>
	<input type="text" name="irrelevant" onChange={props.update} />
/*
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: "This is the default text"
}
*/
export default App; 






// Useful things to remember

// Stateless function: 
//const App = () => <h1 >Hello Stateless </h1>

//React.createElement('h1', null, 'hello guys') =  <h1>Hello worldieron </h1> 
