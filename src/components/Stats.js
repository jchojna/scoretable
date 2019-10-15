import React from 'react';
import '../scss/Stats.scss';

const Stats = (props) => {

  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score
  }, 0);

  return (
    <section className="Stats">
      <p className="Stats__totalPlayers">
        Players: {totalPlayers}
      </p>
      <p className="Stats__totalPoints">
        Total Points: {totalPoints}
      </p>
    </section>
  );
}
export default Stats;