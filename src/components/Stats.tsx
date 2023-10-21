import './Stats.scss';

const Stats = ({ players }) => {
  const totalPlayers = players.length;
  const totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <caption className="visuallyhidden">Players Stats</caption>
      <tbody>
        <tr className="row">
          <th className="header" scope="row">
            Players Number:
          </th>
          <td className="data">{totalPlayers}</td>
        </tr>
        <tr className="row">
          <th className="header" scope="row">
            Total Points:
          </th>
          <td className="data">{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Stats;
