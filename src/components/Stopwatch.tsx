import { useEffect, useState } from 'react';
import './Stopwatch.scss';

const setTwoDigital = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

const Stopwatch = () => {
  const [isRunning, setRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const minutes = setTwoDigital(Math.floor(totalTime / 60000) % 60);
  const seconds = setTwoDigital(Math.floor(totalTime / 1000) % 60);
  const cSeconds = setTwoDigital(Math.floor(totalTime / 10) % 100);

  useEffect(() => {
    const INTERVAL: number = 10;
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
        <span className="time">{cSeconds}</span>
      </div>
      <button
        className="button button--start"
        onClick={() => setRunning((prevState) => !prevState)}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button
        className="Stopwatch__button Stopwatch__button--reset"
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
