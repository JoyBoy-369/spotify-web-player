import React, { Component, Fragment } from "react";

import Player from "./components/Player";

class PlayerContainer extends Component {
  render() {
    return (
      <div className="ui fluid container player-container">
        <Player />
      </div>
    );
  }
}

export default PlayerContainer;
