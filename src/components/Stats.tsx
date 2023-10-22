import style from './Stats.module.scss';

const Stats = ({ players }: PlayersProps) => {
  const totalPlayers = players.length;
  const totalPoints = players.reduce((total: number, player: Player) => {
    return total + player.score;
  }, 0);

  return (
    <table className={style.stats}>
      <caption className="visuallyhidden">Players Stats</caption>
      <tbody>
        <tr className={style.row}>
          <th className={style.header} scope="row">
            Players Number:
          </th>
          <td className={style.data}>{totalPlayers}</td>
        </tr>
        <tr className={style.row}>
          <th className={style.header} scope="row">
            Total Points:
          </th>
          <td className={style.data}>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Stats;
