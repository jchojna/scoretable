import React from 'react';
import Counter from './Counter';
import icons from '../assets/svg/icons.svg'
import '../scss/Player.scss';

const Player = () => {
  return (
    <section className="Player">
      <svg className="Player__crown" viewBox="0 0 512 512">
        <use href={`${icons}#crown`}></use>
      </svg>
      <h2 className="Player__heading">
        Kuba
      </h2>
      <Counter />
    </section>
  );
}

export default Player;