import React, { Component } from 'react';
import '../scss/Stopwatch.scss';

class Stopwatch extends Component {
  state = {
    isRunning: false,
    previousTime: 0,
    totalTime: 0
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.ticking(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setTwoDigital = (number) => {
    return number < 10 ? `0${number}` : number;
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
    const minutes = this.setTwoDigital(Math.floor(totalTime / 60000) % 60);
    const seconds = this.setTwoDigital(Math.floor(totalTime / 1000) % 60);
    const cSeconds = this.setTwoDigital(Math.floor(totalTime / 10) % 100);

    return (
      <section className="Stopwatch">
        <h2 className="Stopwatch__header">Stopwatch</h2>
        <div className="Stopwatch__display">
          <span className="Stopwatch__time">{minutes}</span>
          <span className="Stopwatch__time">{seconds}</span>
          <span className="Stopwatch__time">{cSeconds}</span>
        </div>
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