// import Counter from '../../legacy/src/components/Counter';
import icons from '../assets/svg/icons.svg';
import './Player.scss';

export function Player({ id, name, score }) {
  return (
    <div className="player">
      <button
        className="button player__button"
        // onClick={() => props.remove(props.id)}
      >
        <svg className="player__svg" viewBox="0 0 512 512">
          <use href={`${icons}#remove`}></use>
        </svg>
      </button>

      <svg className="player__crown" viewBox="0 0 512 512">
        <use href={`${icons}#crown`}></use>
      </svg>

      <h2 className="Player__heading">{name}</h2>

      {/* <Counter
        score={props.score}
        changeScore={props.changeScore}
        index={props.index}
      /> */}
    </div>
  );
}
