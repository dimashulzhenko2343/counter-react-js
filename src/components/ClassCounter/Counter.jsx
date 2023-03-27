import React, { Component } from "react";
import s from './Counter.module.css'

class Counter extends Component {
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
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1});
    } 
  };

  render() {
    return (
      <div className={s.Counter}>
        <h2>Сounter</h2>
        <div className={s.displayCount}>{this.state.count}</div>
        <button onClick={this.handleClickPlus}>+1</button>
        <button disabled={this.state.count <= 0} onClick={this.handleClickReset}>reset</button>
        <button disabled={this.state.count <= 0} onClick={this.handleClickMinus}>-1</button>
      </div>
    );
  }
}

export default Counter;