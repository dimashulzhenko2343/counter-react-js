import React, { Component } from "react";
import s from "./ClassTimer.module.css";

class ClassTimer extends Component {
  state = {
    count: 0,
    isCounting: false,
  };

  componentDidMount() {
    let store = localStorage.getItem("timer");
    if (store) {
      this.setState({ count: +store });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.CounterId);
  }

  handleStart = () => {
    this.setState({ isCounting: true });
    this.CounterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.CounterId);
  };

  handleReset = () => {
    this.setState({ isCounting: false });
    clearInterval(this.CounterId);
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className={s.ClassTimer}>
        <h2>Timer</h2>
        <div className={s.countTimer}>{this.state.count}</div>
        <div className={s.blockButton}>
          {this.state.isCounting ? (
            <button onClick={this.handleStop}>stop</button>
          ) : (
            <button onClick={this.handleStart}>start</button>
          )}
          <button disabled={this.state.count === 0} onClick={this.handleReset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default ClassTimer;
