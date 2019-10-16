import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import '../scss/Header.scss';

function Header(props) {
  return (
    <header className="Header">
      <Stats
        players={props.players}
      />
      <h1 className="Header__heading">Score Table</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;