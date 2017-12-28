import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PlayerControls from "../PlayerControls";

class Player extends Component {
  render() {
    return (
      <div className="ui grid player">
        <div className="five wide column player-left">
          <div className="player__now-playing">
            <Link to="/user/spotify/playlist" className="player__cover-art">
              <div>
                <div
                  className="cover-art__image"
                  style={{ backgroundImage: "blue" }}
                />
              </div>
            </Link>
            <div>Saaah</div>
          </div>
        </div>
        <PlayerControls />
        <div className="five wide column">artis</div>
      </div>
    );
  }
}

export default Player;
