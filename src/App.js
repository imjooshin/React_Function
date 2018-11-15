import React, { Component } from 'react';
import './App.css';
import Child from './Child'

class App extends Component {
  myHandler = () => {
    console.log('This is App.myHandler')
  }
  render() {
    return (
      <div className="App">
        <Child someFunction={this.myHandler} />
      </div>
    );
  }
}

export default App;
