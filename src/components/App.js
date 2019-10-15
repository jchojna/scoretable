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

  render() {
    return (
      <div className="App">
        <Header />

        {/* PLAYERS LIST */}
        {this.state.players.map(player => 
          <Player
            id={player.id}
            key={player.id.toString()}
            name={player.name}
            score={player.score}
            remove={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;