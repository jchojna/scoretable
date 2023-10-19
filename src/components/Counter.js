import React from 'react';
import plus from '../assets/svg/icons.svg'
import '../scss/Counter.scss'

const Counter = (props) => {
  
  const index = props.index;

  return (
    <div className="Counter">

      <button
        className="button Counter__button Counter__button--js-minus"
        onClick={() => props.changeScore(index, -1)}
      >
        <svg className="Counter__svg" viewBox="0 0 512 512">
          <use href={`${plus}#minus`}></use>
        </svg>
      </button>

      <p className="Counter__score">{props.score}</p>

      <button
        className="button Counter__button Counter__button--js-plus"
        onClick={() => props.changeScore(index, +1)}
      >
        <svg className="Counter__svg" viewBox="0 0 512 512">
          <use href={`${plus}#plus`}></use>
        </svg>
      </button>

    </div>
  );
}

export default Counter;