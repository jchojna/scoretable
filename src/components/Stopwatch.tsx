import { useEffect, useState } from 'react';
import './Stopwatch.scss';

const setTwoDigital = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

const Stopwatch = () => {
  const [isRunning, setRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const INTERVAL: number = 10;
  const minutes = setTwoDigital(Math.floor(totalTime / 60000) % 60);
  const seconds = setTwoDigital(Math.floor(totalTime / 1000) % 60);
  const ms = setTwoDigital(Math.floor(totalTime / INTERVAL) % 100);

  useEffect(() => {
    let timerId;

    const ticking = () => {
      setTotalTime((prevState) => prevState + INTERVAL);
    };

    if (isRunning) {
      timerId = setInterval(() => ticking(), INTERVAL);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  return (
    <section className="stopwatch">
      <h2 className="header">Stopwatch</h2>
      <div className="display">
        <span className="time">{minutes}</span>
        <span className="time">{seconds}</span>
        <span className="time">{ms}</span>
      </div>
      <button
        className="button button--start"
        onClick={() => setRunning((prevState) => !prevState)}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button
        className="button button--reset"
        onClick={() => {
          setTotalTime(0);
        }}
      >
        Reset
      </button>
    </section>
  );
};
export default Stopwatch;
