import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };

  handleClickPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClickReset = () => {
    this.setState({ count: 0 });
  };

  handleClickMinus = () => {
    if (this.state.count <= 0) {
      this.setState({ count: this.state.count });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    console.log('render :', this.state.count);
    return (
      <div className="App">
        <h1>Сounter class components</h1>
        <div style={{fontSize: '25px'}}>{this.state.count}</div>
        <button onClick={this.handleClickPlus}>+1</button>
        <button onClick={this.handleClickReset}>reset</button>
        <button onClick={this.handleClickMinus}>-1</button>
      </div>
    );
  }
}

export default App;
