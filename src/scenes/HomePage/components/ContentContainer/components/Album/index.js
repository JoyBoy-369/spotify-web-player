import React, { Component } from "react";
import { Link } from "react-router-dom";

class Album extends Component {
  render() {
    const { album } = this.props;
    console.log(album);
    return (
      <div className="column album">
        <div className="album--hoverable">
          <Link to="/user/spotify/playlist" className="cover-art">
            <div>
              <div
                className="cover-art__image"
                style={{ backgroundImage: `url(${album.imageUrl})` }}
              />
              <div className="album__icon icon-music-play-button" />
            </div>
          </Link>
          <div className="album__title">{album.name}</div>
        </div>
      </div>
    );
  }
}

export default Album;
