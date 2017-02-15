import React from 'react';
//import ReactDOM from 'react-dom'

class App extends React.Component{
	constructor(){
		super();
		this.state = {items: []}
	}

	componentWillMount(){
		fetch( 'https://swapi.co/api/people/?format=json' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
	}

	filter(e){
		this.setState({filter: e.target.value})
	}

	render(){
		let items = this.state.items;

		if(this.state.filter){
			items = items.filter(item =>item.name.toLowerCase().includes(this.state.filter.toLowerCasse()))
		}

		return(
			<div>
				<input type="text" 
				onChange={this.filter.bind(this)}/>
				{items.map(item =>
				<Person key={item.name} person={item} />)}
			</div>
		)
	}
}

const Person = (props) =>  <h4>{props.person.name}</h4>

export default App


/* 
Tutorial 12:
class App extends React.Component{
	constructor(){
		super();
		this.state = {increasing: false}
	}
	
	update(){
		ReactDOM.render(
			<App val={this.props.val+1} />,
			document.getElementById('root'))
	}

	componentWillReceiveProps(nextProps){
		this.setState({increasing: nextProps.val > this.props.val})
	}

	shouldComponentUpdate(nextProps, nextState){
		return nextProps.val % 5 === 0;
	}

	render(){
		console.log(this.state.increasing)
		return(
			<button onClick={this.update.bind(this)}>
			{this.props.val}
			</button>
		)
	}

	componentDidUpdate(prevProps, prevState){
		console.log(`prevProps: ${prevProps.val}`)
	}
}

App.defaultProps = {val:0}
Tutorial 11:
class App extends React.Component{
	constructor(){
		super();
		this.state = {val:0};
		this.update = this.update.bind(this)
	}

	update(){
		this.setState({val:this.state.val + 1})
	}

	componentWillMount(){
		console.log('componentWillMount')
	}

	render(){
		console.log('render')
		return(
			<div>
				<button onClick={this.update}> {this.state.val}</button>
			</div>
		)
	}

	componentDidMount(){
		console.log('componentDidMount')
	}

	componentWillUnmount(){
		console.log('componentWillUnmount')
	}
}

class Wrapper extends React.Component{
	mount(){
		ReactDom.render(<App />, document.getElementById('a'))
	}

	unmount(){
		ReactDom.unmountComponentAtNode(document.getElementById('a'))
	}

	render(){

		return(
			<div>
				<button onClick={this.mount.bind(this)}> Mount</button>
				<button onClick={this.unmount.bind(this)}> Un-Mount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper; 
Tutorial 10:
class App extends React.Component{

	constructor(){
		super();
		this.state = {a: ''}
	}

	update(e){
		this.setState({
			a:this.a.value,
			b:this.refs.b.value,
			c:this.c.refs.input.value
		})
	}

	render(){
		return (
			<div>
				<input
					ref={ node => this.a = node}
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.a}

				<hr />

				<input
					ref="b"
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.b}

				<hr />

				<Input
					ref={ component => this.c = component}
					update={this.update.bind(this)}
				/> {this.state.c}

			</div>
		)
	}
}

class Input extends React.Component{
	render(){
		return <div><input ref="input" type="text" onChange={this.props.update}/></div>
	}
}

Tutorial 9:

class App extends React.Component{

	constructor(){
		super();
		this.state = {currentEvent: "---"}
		this.update = this.update.bind(this)
	}

	update(e){
		this.setState({currentEvent: e.type})
	}

	render(){
		return (
			<div>
				<textarea
					onKeyPress={this.update}
					onCopy={this.update}
					onCut={this.update}
					onPaste={this.update}
					onFocus={this.update}
					onBlur={this.update}
					onDoubleClick={this.update}
					onTouchStart={this.update}
					onTouchMove={this.update}
					onTouchEnd={this.update}
					cols="30"
					rows="10" />

				<h1>{this.state.currentEvent}</h1>
			</div>
		)
	}
}
Tutorial 8:
class App extends React.Component{
	render(){
		return <Title text="This is the text"/>
	}
}

const Title = (props) => <h1>Title: {props.text} </h1>

Title.propTypes = {
	text(props, propName, component){
		//Custom validation for props
		if(!(propName in props)){
			return new Error('missing ${propName}')
		}
		if(props[propName].length < 6) {
			return new Error('${propName} was too shorterino')
		}
	} //text: React.PropTypes.string
}


Tutorial 7:
class App extends React.Component {
	render(){
		return <button>    I <Heart /> React</button>
	}
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
	render(){
		return <span>&hearts;</span>
	}
}

Tutorial 6 ended here
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

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: "This is the default text"
}
*/

// Useful things to remember

// Stateless function: 
//const App = () => <h1 >Hello Stateless </h1>

//React.createElement('h1', null, 'hello guys') =  <h1>Hello worldieron </h1> 
