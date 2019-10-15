import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import '../scss/App.scss';

class App extends Component {
  state = {
    players: [
      {
        id: "1",
        name: "Ania",
        score: 0
      },
      {
        id: "2",
        name: "Agnieszka",
        score: 0
      },
      {
        id: "3",
        name: "Olek",
        score: 0
      },
      {
        id: "4",
        name: "Kuba",
        score: 0
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(a => a.id !== id)
    }));
  }

  handleScoreChange = (index, operation) => {
    this.setState(prevState => {
      return operation === -1 && this.state.players[index].score <= 0
      ? 0
      : { score: prevState.players[index].score += operation };
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          totalPlayers={this.state.players.length}
          totalPoints={this.state.players.reduce(
            (a,b) => a + b.score, 0
          )}
        />

        {/* PLAYERS LIST */}
        {this.state.players.map((player, index) => 
          <Player
            changeScore={this.handleScoreChange}
            id={player.id}
            index={index}
            key={player.id.toString()}
            name={player.name}
            remove={this.handleRemovePlayer}
            score={player.score}
          />
        )}
      </div>
    );
  }
}
export default App;