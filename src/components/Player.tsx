import icons from '../assets/svg/icons.svg';
import Counter from './Counter';
import './Player.scss';

const Player = ({ id, index, name, score, changeScore, removePlayer }) => {
  return (
    <div className="player">
      <button
        className="button player__button"
        onClick={() => removePlayer(id)}
      >
        <svg className="player__svg" viewBox="0 0 512 512">
          <use href={`${icons}#remove`}></use>
        </svg>
      </button>

      <svg className="player__crown" viewBox="0 0 512 512">
        <use href={`${icons}#crown`}></use>
      </svg>

      <h2 className="Player__heading">{name}</h2>

      <Counter index={index} score={score} changeScore={changeScore} />
    </div>
  );
};

export default Player;
