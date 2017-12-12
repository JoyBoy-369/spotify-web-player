import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import { service as ClientApi } from "src/services";
import Album from "../Album";

class AlbumsContainer extends Component {
  state = {
    showAll: false
  };

  clickHandle = evt => {
    this.setState({
      showAll: true
    });
  };

  render() {
    const { albums } = this.props,
      { showAll } = this.state;

    let slicedMedias = [];
    slicedMedias = albums.slice(0, 8);

    return (
      <div className="ui grid">
        <div className="doubling four column row">
          {slicedMedias.map(media => {
            return <Album key={media.id} album={media} />;
          })}
        </div>
        <Route
          render={({ history, match }) => (
            <div
              className="centered two wide column btn btn--transparent u-padding-none"
              onClick={() => {
                history.push(`/view${match.url}`, { albums });
              }}
            >
              View More
            </div>
          )}
        />
      </div>
    );
  }
}

export default AlbumsContainer;
