import React from 'react';
import '../scss/Stats.scss';

const Stats = (props) => {

  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score
  }, 0);

  return (
    <table className="Stats">
      <caption className="visuallyhidden">Players Stats</caption>
      <tbody>
        <tr className="Stats__row">
          <th className="Stats__header" scope="row">Players Number:</th>
          <td className="Stats__data">{totalPlayers}</td>
        </tr>
        <tr className="Stats__row">
          <th className="Stats__header" scope="row">Total Points:</th>
          <td className="Stats__data">{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Stats;