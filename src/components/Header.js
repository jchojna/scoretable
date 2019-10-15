import React from 'react';
import Stopwatch from './Stopwatch';
import '../css/Header.css';

function Header() {
  return (
    <header className="Header">
      <h1 className="Header__heading">Score Table</h1>
      <section className="Header__stats">
        <p className="Header__stat Header__stat--players">
          Players: 0
        </p>
        <p className="Header__stat Header__stat--points">
          Total Points: 0
        </p>
      </section>
      <Stopwatch />
    </header>
  );
}

export default Header;