import React from "react";
import './App.css';
class Counter extends React.Component {

  IncrementCounter = () => {
    this.setState({Count:this.state.Count +1})
  };
  DecrementCounter = () => {
    this.setState({Count:this.state.Count -1})
  }
  constructor() {
    super();
    this.state = {
      Count: 0
    }
  }


  render() {
    return (
      <div className="container">
        <h1>Counter Demo</h1>
        <h3>Counter: {this.state.Count}</h3>
        <button onClick={this.IncrementCounter}>Increment Counter</button>
        <button onClick={this.DecrementCounter}>Decrement Counter</button>
      </div>
    );
  }
}

export default Counter;
