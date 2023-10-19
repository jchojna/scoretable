import { useState } from 'react';

import { Player } from './components/Player';

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

function App() {
  const [players, setPlayers] = useState(state.players);

  return (
    <div className="App">
      {players.map(({ id, name, score }, index) => (
        <Player
          // changeScore={this.handleScoreChange}
          id={id}
          key={id.toString()}
          index={index}
          name={name}
          // remove={this.handleRemovePlayer}
          score={score}
        />
      ))}
    </div>
  );
}

export default App;

// class App extends Component {

//   handleRemovePlayer = (id) => {
//     this.setState((prevState) => ({
//       players: prevState.players.filter((a) => a.id !== id),
//     }));
//   };

//   handleScoreChange = (index, operation) => {
//     const { players } = this.state;
//     this.setState((prevState) => {
//       return operation === -1 && players[index].score <= 0
//         ? 0
//         : { score: (prevState.players[index].score += operation) };
//     });
//   };

//   handlePlayerAddition = (name) => {
//     const { players } = this.state;
//     const id = parseInt(players[players.length - 1].id) + 1;
//     this.setState((prevState) => ({
//       players: [...prevState.players, { id, name, score: 0 }],
//     }));
//   };

//   render() {
//     const { players } = this.state;
//     return (
//       <div className="App">
//         <Header players={players} />

//         {/* PLAYERS LIST */}
//         {this.state.players.map((player, index) => (
//           <Player
//             changeScore={this.handleScoreChange}
//             id={player.id}
//             index={index}
//             key={player.id.toString()}
//             name={player.name}
//             remove={this.handleRemovePlayer}
//             score={player.score}
//           />
//         ))}

//         <AddPlayer addPlayer={this.handlePlayerAddition} />
//       </div>
//     );
//   }
// }
