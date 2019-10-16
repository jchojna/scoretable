import React, { Component } from 'react';
import '../scss/Stopwatch.scss';

class Stopwatch extends Component {
  state = {
    isRunning: false,
    previousTime: 0,
    totalTime: 0
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.ticking(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  ticking = () => {
    if (this.state.isRunning) {
      const now = Date.now();

      this.setState(prevState => ({
        previousTime: now,
        totalTime: prevState.totalTime + (now - this.state.previousTime)
      }));
    }
  }

  handleStopwatch = () => {
    const { isRunning } = this.state;
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));

    if (!isRunning) this.setState({ previousTime: Date.now() });
  }

  handleReset = () => this.setState({ totalTime: 0 });

  render() {
    const {isRunning, totalTime} = this.state;
    const totalTimeInMin = Math.floor(totalTime / 1000);

    return (
      <section className="Stopwatch">
        <h2 className="Stopwatch__header">Stopwatch</h2>
        <span className="Stopwatch__time">{totalTimeInMin}</span>
        <button
          className="Stopwatch__button Stopwatch__button--start"
          onClick={this.handleStopwatch}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          className="Stopwatch__button Stopwatch__button--reset"
          onClick={this.handleReset}
        >
          Reset
        </button>
      </section>
    );
  }
}
export default Stopwatch;