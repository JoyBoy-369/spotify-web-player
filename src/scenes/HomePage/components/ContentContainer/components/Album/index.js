import React, { Component } from "react";
import { Link } from "react-router-dom";

function setPlay(state,props) {
  return { albumPlaying: !props.nowPlaying.shouldPlay };
}

class Album extends Component {

  getClassNames = () => {
    const { media, nowPlaying } = this.props;

    if (
      nowPlaying &&
      media.id === nowPlaying.currentId &&
      nowPlaying.shouldPlay
    )
      return "album__icon icon-music-pause-button";
    else return "album__icon icon-music-play-button";
  };

  clickHandle = evt => {
    const { dispatch, media, clickMediaHandle, nowPlaying } = this.props;
  let status=true;
    evt.preventDefault();

    if(media.id === nowPlaying.currentId)
    status=!nowPlaying.shouldPlay;
    
    clickMediaHandle(media,status);
  };

  render() {
    const { media, nowPlaying } = this.props;

    return <div className="column album">
        <div className="album--hoverable">
          <Link to="/user/spotify/playlist" className="cover-art">
            <div>
              <div className="cover-art__image" style={media.id === nowPlaying.currentId &&nowPlaying.shouldPlay ? { backgroundImage: `url(${media.imageUrl})`, filter: "brightness(0.3)" } : { backgroundImage: `url(${media.imageUrl})` }} />
              <div className={this.getClassNames()} style={media.id === nowPlaying.currentId &&nowPlaying.shouldPlay ? { opacity: 1 } : null} onClick={this.clickHandle} />
            </div>
          </Link>
          <div className="album__title">{media.name}</div>
        </div>
      </div>;
  }
}

export default Album;
