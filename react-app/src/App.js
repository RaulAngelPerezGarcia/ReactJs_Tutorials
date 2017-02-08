import React from 'react';

// State function:
class App extends React.Component {
  render(){
    // Can only return 1 element so we put everything under a div
    return (
      <div>
        <h1>Hello worldieron </h1> 
        <b>Bold</b>
      </div>
    )
  }
}


export default App; 






// Useful things to remember

// Stateless function: 
//const App = () => <h1 >Hello Stateless </h1>

//React.createElement('h1', null, 'hello guys') =  <h1>Hello worldieron </h1> 
