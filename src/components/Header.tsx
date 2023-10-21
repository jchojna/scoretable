import Stats from './Stats';
import Stopwatch from './Stopwatch';
import './Header.scss';

function Header({ players }) {
  return (
    <header className="Header">
      <Stats players={players} />
      <h1 className="Header__heading">Score Table</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;
