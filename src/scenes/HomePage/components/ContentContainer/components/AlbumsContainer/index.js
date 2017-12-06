import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import { ClientApi } from "src/services";
import Album from "../Album";

class AlbumsContainer extends Component {
  componentWillMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    ClientApi.getAlbums("23O4F21GDWiGd33tFN3ZgI").then(albums =>
      this.setState({
        fetched: true,
        albums: albums
      })
    );
  };

  render() {
    return (
      <div className="ui center aligned segment">
        <Album />
      </div>
    );
  }
}

export default AlbumsContainer;
