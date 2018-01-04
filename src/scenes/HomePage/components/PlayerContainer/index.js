import React, { Component, Fragment } from "react";

import Player from "./components/Player";
import { service as ClientApi } from "src/services";

class PlayerContainer extends Component {
  state = {
    fetched: false,
    tracks: [],
    currentAlbum: ""
  };

  componentWillReceiveProps(nextProps) {
    console.log("props", nextProps);
    if (nextProps.playlist.id === this.props.playlist.id) return;
    ClientApi.getTracksByUrl(nextProps.playlist.id).then(tracks =>
      this.setState({ fetched: true, tracks: [...tracks] })
    );
  }

  render() {
    const { playlist } = this.props;
    const { currentAlbum, tracks } = this.state;
    return (
      <div className="ui fluid container player-container">
        <Player album={tracks[0]} />
      </div>
    );
  }
}

export default PlayerContainer;
