import React, { Component } from 'react';
import '../scss/AddPlayer.scss';

class AddPlayer extends Component {
  state = {

  }

  render() {
    return (
      <form className="AddPlayer">
        <input
          className="AddPlayer__input AddPlayer__input--text"
          type="text"
        />
        <input
          className="AddPlayer__input AddPlayer__input--button"
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}
export default AddPlayer;