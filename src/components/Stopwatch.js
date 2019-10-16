import React from 'react';
import '../scss/Stopwatch.scss';

function Stopwatch() {
  return (
    <section className="Stopwatch">
      <h2 className="Stopwatch__header">Stopwatch</h2>
      <span className="Stopwatch__time">0</span>
      <button className="Stopwatch__button Stopwatch__button--start">
        Start
      </button>
      <button className="Stopwatch__button Stopwatch__button--reset">
        Reset
      </button>
    </section>
  );
}
export default Stopwatch;