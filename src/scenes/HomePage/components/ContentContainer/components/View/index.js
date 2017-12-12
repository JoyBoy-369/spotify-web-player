import React, { Component } from "react";
import { Link } from "react-router-dom";

import Album from "../Album";

class View extends Component {
  render() {
    const { location } = this.props;
    console.log("state", location);
    const { albums } = location.state;
    return (
      <div className="ui grid">
        <div className="doubling four column row">
          {albums.map(album => {
            return <Album key={album.id} album={album} />;
          })}
        </div>
      </div>
    );
  }
}

export default View;
