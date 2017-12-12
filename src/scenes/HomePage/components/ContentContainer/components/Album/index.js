import React, { Component } from "react";
import { Link } from "react-router-dom";

class Album extends Component {
  render() {
    const { album } = this.props;
    console.log(album);
    return (
      <div className="column">
        <div
          className="column album"
          style={{ backgroundImage: `url(${album.imageUrl})` }}
        />
        <span className="album__title">{album.name}</span>
      </div>
    );
  }
}

export default Album;
