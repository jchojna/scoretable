import React from 'react';
import '../scss/Stats.scss';

const Stats = (props) => {
  return (
    <section className="Stats">
      <p className="Stats__totalPlayers">
        Players: {props.totalPlayers}
      </p>
      <p className="Stats__totalPoints">
        Total Points: {props.totalPoints}
      </p>
    </section>
  );
}
export default Stats;