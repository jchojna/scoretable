import { useEffect, useState } from 'react';
import styles from './Stopwatch.module.scss';

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
    <section className={styles.stopwatch}>
      <h2 className={styles.header}>Stopwatch</h2>
      <div className={styles.display}>
        <span className={styles.time}>{minutes}</span>
        <span className={styles.time}>{seconds}</span>
        <span className={styles.time}>{ms}</span>
      </div>
      <button
        className={styles.button}
        onClick={() => setRunning((prevState) => !prevState)}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button className={styles.button} onClick={() => setTotalTime(0)}>
        Reset
      </button>
    </section>
  );
};
export default Stopwatch;
