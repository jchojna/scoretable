import React from 'react';
import plus from '../assets/svg/icons.svg'
import '../scss/Counter.scss'

const Counter = () => {
  return (
    <div className="Counter">
      <button className="button Counter__button Counter__button--js-minus">
        <svg className="Counter__svg" viewBox="0 0 512 512">
          <use href={`${plus}#minus`}></use>
        </svg>
      </button>
      <p className="Counter__score">
        14
      </p>
      <button className="button Counter__button Counter__button--js-plus">
        <svg className="Counter__svg" viewBox="0 0 512 512">
          <use href={`${plus}#plus`}></use>
        </svg>
      </button>
    </div>
  );
}

export default Counter;