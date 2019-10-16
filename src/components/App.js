import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';
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
    const {players} = this.state;
    this.setState(prevState => {
      return operation === -1 && players[index].score <= 0
      ? 0
      : { score: prevState.players[index].score += operation };
    });
  }

  render() {
    const {players} = this.state;
    return (
      <div className="App">
        <Header
          players={players}
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

        <AddPlayer />
      </div>
    );
  }
}
export default App;