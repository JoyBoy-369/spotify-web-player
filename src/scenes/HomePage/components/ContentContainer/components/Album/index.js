import React, { Component } from "react";
import { Link } from "react-router-dom";

class Album extends Component {
  clickHandle = evt => {
    const { dispatch, media } = this.props;
    evt.preventDefault();
    dispatch({ type: "playlist/current", playlist: media });
  };
  render() {
    const { media } = this.props;
    console.log(media);
    return (
      <div className="column album">
        <div className="album--hoverable">
          <Link to="/user/spotify/playlist" className="cover-art">
            <div>
              <div
                className="cover-art__image"
                style={{ backgroundImage: `url(${media.imageUrl})` }}
              />
              <div
                className="album__icon icon-music-play-button"
                onClick={this.clickHandle}
              />
            </div>
          </Link>
          <div className="album__title">{media.name}</div>
        </div>
      </div>
    );
  }
}

export default Album;
