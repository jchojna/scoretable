import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import '../css/App.css';

class App extends Component {
  state = {

  };

  render() {
    return (
      <div className="App">
        <Header />
        <Player />
      </div>
    );
  }
}

export default App;