import React, { Component } from "react";
import { Link } from "react-router-dom";

import Album from "../Album";

class View extends Component {
  render() {
    const { location, dispatch } = this.props;
    const { albums, msg } = location.state;
    return (
      <div className="ui grid u-content-spacing">
        <div className="centered row">
          <h1 className="main-header-base">{msg}</h1>
        </div>

        <div className="doubling six column row">
          {albums.map(album => {
            return <Album key={album.id} album={album} dispatch={dispatch} />;
          })}
        </div>
      </div>
    );
  }
}

export default View;
