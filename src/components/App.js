import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import { players } from './Helpers'
import '../scss/App.scss';

class App extends Component {
  state = {
    players
  };

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

          />
        )}
      </div>
    );
  }
}

export default App;