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
        <Header />

        {/* PLAYERS LIST */}
        {this.state.players.map((player, index) => 
          <Player
            id={player.id}
            key={player.id.toString()}
            name={player.name}
            score={player.score}
            changeScore={this.handleScoreChange}
            remove={this.handleRemovePlayer}
            index={index}
          />
        )}
      </div>
    );
  }
}

export default App;