import React, { Component, Fragment } from "react";

import Player from "./components/Player";
import { service as ClientApi } from "src/services";
import { webPlayer as WebPlayer } from "src/services";

function incrementTrackIndex(prevState) {
  return {
    id:
      prevState.id < prevState.tracks.length
        ? prevState.id + 1
        : prevState.tracks.length
  };
}

function decrementTrackIndex(prevState) {
  return {
    id: prevState.id > 0 ? prevState.id - 1 : 0
  };
}

function playTrack(key, id, tracks) {
  let newId;

  if (key === "forward") newId = id + 1;
  else newId = id - 1;

  return Promise.resolve()
    .then(WebPlayer.disconnect)
    .then(_ => WebPlayer.play(tracks[newId].previewUrl));
}

class PlayerContainer extends Component {
  state = {
    fetched: false,
    tracks: [],
    id: 0,
    play: false,
    elapsedTime: 0,
    startTime: 0,
    endTime: 0
  };

  async componentWillReceiveProps(nextProps) {
    const { tracks, id } = this.state;

    if (!nextProps.playlist) return;
    if (nextProps.playlist.id === this.props.playlist.id) {
      if (!nextProps.shouldPlay) {
        return WebPlayer.stop();
      }
    }

    const result = await ClientApi.getTracksByUrl(nextProps.playlist.id);
    const filteredTracks = result.filter(track => track.previewUrl);

    this.setState({ fetched: true, tracks: [...filteredTracks] });

    return Promise.resolve()
      .then(_ => WebPlayer.disconnect())
      .then(_ => WebPlayer.play(filteredTracks[id].previewUrl))
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    WebPlayer.disconnect();
    clearInterval(this.timer);
  }

  songProgress = () => {
    const { elapsedTime, endTime, tracks, id } = this.state;

    console.log("hello", elapsedTime, endTime, tracks);
    if (elapsedTime === endTime) {
      playTrack("forward", id, tracks);
      clearInterval(this.timer);
    }

    this.timer = setInterval(this.tick, 50);
  };

  tick = () => {
    const { startTime } = this.state;

    this.setState({
      elapsedTimen: new Date() - startTime
    });
  };

  clickHandle = name => {
    const { tracks, id } = this.state;
    const { dispatch, shouldPlay, playlist } = this.props;

    if (tracks.length <= 0) return;

    switch (name) {
      case "play":
        return WebPlayer.play(tracks[id].previewUrl)
          .then(_ => {
            this.setState({
              startTime: Date.now(),
              endTime: tracks[id].durationMs
            });
            this.songProgress();
            return dispatch({
              type: "playlist/nowplaying",
              nowPlaying: {
                currentId: playlist.id,
                shouldPlay: !shouldPlay
              }
            });
          })
          .catch(err => console.log(err));

      case "pause":
        WebPlayer.stop();
        dispatch({
          type: "playlist/nowplaying",
          nowPlaying: {
            currentId: playlist.id,
            shouldPlay: !shouldPlay
          }
        });
        break;

      case "step forward": {
        this.setState(incrementTrackIndex);
        playTrack("forward", id, tracks).catch(err => console.log(err));
        break;
      }
      case "step backward":
        this.setState(decrementTrackIndex);
        playTrack("backward", id, tracks).catch(err => console.log(err));
        break;

      case "repeat":
        break;
      default:
    }
  };

  render() {
    const { playlist, shouldPlay } = this.props;
    const { tracks, id } = this.state;
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
