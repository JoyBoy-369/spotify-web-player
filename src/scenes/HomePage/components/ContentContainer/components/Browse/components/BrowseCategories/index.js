import React, { Component } from "react";

import AlbumContainer from "../../../AlbumsContainer";
import { service as ClientApi } from "src/services";

import { Route } from "react-router-dom";

export default class BrowseCategories extends Component {
  state = { playlists: [], fetched: false };

  componentWillMount() {
    console.log("hi", this.props);
    const { category } = this.props;
    this.getPlaylists(category);
  }
  getPlaylists = category => {
    return ClientApi.getPlaylists(category).then(items =>
      this.setState({
        fetched: true,
        playlists: items.playlists
      })
    );
  };

  render() {
    const { playlists } = this.state;
    return <AlbumContainer albums={playlists} />;
  }
}
