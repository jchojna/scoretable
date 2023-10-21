import icons from '../assets/svg/icons.svg';

import style from './Counter.module.scss';

const Counter = ({ index, score, changeScore }) => {
  return (
    <div className={style.counter}>
      <button className={style.button} onClick={() => changeScore(index, -1)}>
        <svg className={style.svg} viewBox="0 0 512 512">
          <use href={`${icons}#minus`}></use>
        </svg>
      </button>
      <p className={style.score}>{score}</p>
      <button className={style.button} onClick={() => changeScore(index, +1)}>
        <svg className={style.svg} viewBox="0 0 512 512">
          <use href={`${icons}#plus`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Counter;
