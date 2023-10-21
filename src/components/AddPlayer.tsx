import { useState } from 'react';

import './AddPlayer.scss';

const AddPlayer = ({ addPlayer }) => {
  const [newPlayer, setNewPlayer] = useState('');

  const handleAddPlayer = (e) => {
    setNewPlayer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(newPlayer);
    setNewPlayer('');
  };

  return (
    <form className="AddPlayer" onSubmit={handleSubmit}>
      <input
        className="AddPlayer__input AddPlayer__input--text"
        onChange={handleAddPlayer}
        placeholder="New Player's Name"
        type="text"
        value={newPlayer}
        required
      />
      <input
        className="AddPlayer__input AddPlayer__input--button"
        type="submit"
        value="Add Player"
      />
    </form>
  );
};

export default AddPlayer;
