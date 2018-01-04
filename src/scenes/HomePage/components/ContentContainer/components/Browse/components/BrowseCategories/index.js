import React, { Component } from "react";

import AlbumContainer from "../../../AlbumsContainer";
import { service as ClientApi } from "src/services";

import { Route } from "react-router-dom";

export default class BrowseCategories extends Component {
  state = { medias: [], msg: "", fetched: false };

  componentWillMount() {
    console.log("hi", this.props);
    const { category } = this.props;
    this.getPlaylists(category);
  }
  getPlaylists = category => {
    return ClientApi.getPlaylists(category).then(items => {
      console.log("items", items);
      this.setState({
        fetched: true,
        medias: items.playlists,
        msg: items.msg
      });
    });
  };

  render() {
    const { medias, msg } = this.state;
    console.log(medias);
    return (
      <div className="u-content-spacing">
        <div className="row">
          <h1 className="main-header-base">{msg}</h1>
        </div>
        <AlbumContainer albums={medias} msg={msg} {...this.props} />
      </div>
    );
  }
}
