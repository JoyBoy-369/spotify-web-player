import React, { Component } from "react";
import { Link } from "react-router-dom";

class Album extends Component {
  state = {
    play: false
  };

  getClassNames = () => {
    const { currentId, media } = this.props;
    const { play } = this.state;

    if (media.id === currentId && play)
      return "album__icon icon-music-pause-button";
    else if (!play) return "album__icon icon-music-play-button";
    else return "album__icon icon-music-play-button";
  };

  clickHandle = evt => {
    const { dispatch, media, clickMediaHandle } = this.props;
    const { play } = this.state;

    evt.preventDefault();
    this.setState(prevState => ({
      play: !prevState.play
    }));
    dispatch({
      type: "playlist/current",
      playlist: media,
      play: !play
    });
    clickMediaHandle(media.id);
  };
  render() {
    const { media, currentId } = this.props;
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
                className={this.getClassNames()}
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
