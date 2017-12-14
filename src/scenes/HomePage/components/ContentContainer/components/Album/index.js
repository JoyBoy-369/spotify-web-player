import React, { Component } from "react";
import { Link } from "react-router-dom";

class Album extends Component {
  render() {
    const { album } = this.props;
    console.log(album);
    return (
      <div className="column album">
        <div className="album--hoverable">
          <div
            className="album__cover-art"
            style={{ backgroundImage: `url(${album.imageUrl})` }}
          />
          <div className="album__icon icon-music-play-button" />
          <span className="album__title">{album.name}</span>
        </div>
      </div>
    );
  }
}

export default Album;
