import { useState } from 'react';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';

import './App.css';

const state = {
  players: [
    {
      id: '1',
      name: 'Ania',
      score: 0,
    },
    {
      id: '2',
      name: 'Agnieszka',
      score: 0,
    },
    {
      id: '3',
      name: 'Olek',
      score: 0,
    },
    {
      id: '4',
      name: 'Kuba',
      score: 0,
    },
    {
      id: '5',
      name: 'Kasia',
      score: 0,
    },
  ],
};

const App = () => {
  const [players, setPlayers] = useState(state.players);

  const handlePlayerAddition = (name: string) => {
    const id = parseInt(players[players.length - 1].id) + 1;
    setPlayers((prevState) => [...prevState, { id, name, score: 0 }]);
  };

  const removePlayer = (id: string) => {
    setPlayers((prevState) => prevState.filter((a) => a.id !== id));
  };

  const handleScoreChange = (index: number, operation: number) => {
    setPlayers((prevState) => {
      return prevState.map((player, i) => {
        if (i === index) {
          return { ...player, score: Math.max(0, player.score + operation) };
        }
        return player;
      });
    });
  };

  return (
    <div className="App">
      <Header players={players} />
      {players.map(({ id, name, score }, index) => (
        <Player
          id={id}
          key={id.toString()}
          index={index}
          name={name}
          score={score}
          changeScore={handleScoreChange}
          removePlayer={removePlayer}
        />
      ))}
      <AddPlayer addPlayer={handlePlayerAddition} />
    </div>
  );
};

export default App;
