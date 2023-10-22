import { useState } from 'react';

import AddPlayer from './components/AddPlayer';
import Header from './components/Header';
import Player from './components/Player';

import './App.css';

const initPlayers = [
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
];

const App = () => {
  const [players, setPlayers] = useState(initPlayers);

  const handlePlayerAddition = (name: string) => {
    // TODO: add uuid
    const id = (+players[players.length - 1].id + 1).toString();
    setPlayers((players: Player[]): Player[] => [
      ...players,
      { id, name, score: 0 },
    ]);
  };

  const removePlayer = (id: string) => {
    setPlayers((players: Player[]): Player[] =>
      players.filter((a) => a.id !== id)
    );
  };

  const handleScoreChange = (index: number, operation: number) => {
    setPlayers((players: Player[]) => {
      return players.map((player, i) => {
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
      {players.map(({ id, name, score }: Player, index: number) => (
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
