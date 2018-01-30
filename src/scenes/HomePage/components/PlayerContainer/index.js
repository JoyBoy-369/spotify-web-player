import React, { Component, Fragment } from "react";

import Player from "./components/Player";
import { service as ClientApi } from "src/services";
import { webPlayer as WebPlayer } from "src/services";

class PlayerContainer extends Component {
  state = {
    fetched: false,
    tracks: [],
    id: 0,
    play: false
  };

  componentWillReceiveProps(nextProps) {
    console.log("props", nextProps);
    if (nextProps.playlist.id === this.props.playlist.id) return;
    ClientApi.getTracksByUrl(nextProps.playlist.id).then(tracks =>
      this.setState({
        fetched: true,
        tracks: [...tracks]
      })
    );
  }

  clickHandle = name => {
    const { tracks, id } = this.state;
    const { dispatch } = this.props;

    if (tracks.length <= 0) return;
    switch (name) {
      case "play":
        WebPlayer.createBufferSource();
        return WebPlayer.getDecodedData(tracks[id].previewUrl).then(
          WebPlayer.start
        );
      case "pause":
        WebPlayer.stop();
        break;
      case "step forward":
        this.setState(prevState => ({
          id:
            prevState.id < prevState.tracks.length
              ? prevState.id + 1
              : prevState.tracks.length
        }));
        break;
      case "step backward":
        this.setState(prevState => ({
          id: prevState.id > 0 ? prevState.id - 1 : 0
        }));
        break;
      case "repeat":
        break;
      default:
    }
  };

  render() {
    const { playlist, shouldPlay } = this.props;
    const { tracks, id, play } = this.state;
    let currentAlbum = tracks[id];
    return (
      <div className="ui fluid container player-container">
        <Player
          album={currentAlbum}
          clickHandle={this.clickHandle}
          shouldPlay={shouldPlay}
        />
      </div>
    );
  }
}

export default PlayerContainer;
