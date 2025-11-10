import React, { Component } from "react";

export class Timer extends Component {
  constructor() {
    super();
  }
  state = {
    timer: 0,
  };
  intervalTimer = null;
  componentDidMount() {
    this.intervalTimer = setInterval(() => {
      this.setState((prevstate) => ({ time: prevstate.time + 1 }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>Timer</h2>
        <h5>Timer:{this.state.timer}</h5>
      </div>
    );
  }
}

export default Timer;
