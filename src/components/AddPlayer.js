import React, { Component } from 'react';
import '../scss/AddPlayer.scss';

class AddPlayer extends Component {
  state = {
    newPlayer: ''
  }

  handleAddPlayer = (e) => {
    this.setState({ newPlayer: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.newPlayer);
    this.setState({ newPlayer: '' })
  }

  render() {
    return (
      <form
        className="AddPlayer"
        onSubmit={this.handleSubmit}
      >
        <input
          className="AddPlayer__input AddPlayer__input--text"
          onChange={this.handleAddPlayer}
          placeholder="New Player's Name"
          type="text"
          value={this.state.newPlayer}
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