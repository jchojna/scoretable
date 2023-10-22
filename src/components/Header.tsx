import Stats from './Stats';
import Stopwatch from './Stopwatch';

import style from './Header.module.scss';

const Header = ({ players }: PlayersProps) => {
  return (
    <header className={style.header}>
      <Stats players={players} />
      <h1 className={style.heading}>Score Table</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
