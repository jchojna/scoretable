import icons from '../assets/svg/icons.svg';
import Counter from './Counter';
import style from './Player.module.scss';

const Player = ({ id, index, name, score, changeScore, removePlayer }) => {
  return (
    <div className={style.player}>
      <button className={style.button} onClick={() => removePlayer(id)}>
        <svg className={style.svg} viewBox="0 0 512 512">
          <use href={`${icons}#remove`}></use>
        </svg>
      </button>
      <svg className={style.crown} viewBox="0 0 512 512">
        <use href={`${icons}#crown`}></use>
      </svg>
      <h2 className={style.heading}>{name}</h2>
      <Counter index={index} score={score} changeScore={changeScore} />
    </div>
  );
};

export default Player;
