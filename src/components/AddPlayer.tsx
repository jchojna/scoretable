import { useState } from 'react';

import style from './AddPlayer.module.scss';

const AddPlayer = ({ addPlayer }) => {
  const [newPlayer, setNewPlayer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(newPlayer);
    setNewPlayer('');
  };

  return (
    <form className={style.addPlayer} onSubmit={handleSubmit}>
      <input
        className={`${style.input} ${style['input--text']}`}
        onChange={(e) => setNewPlayer(e.target.value)}
        placeholder="New Player's Name"
        type="text"
        value={newPlayer}
        required
      />
      <input
        className={`${style.input} ${style['input--button']}`}
        type="submit"
        value="Add Player"
      />
    </form>
  );
};

export default AddPlayer;
