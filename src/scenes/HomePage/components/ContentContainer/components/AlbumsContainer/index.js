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
    const { albums, msg, dispatch } = this.props,
      { showAll } = this.state;
    console.log(this.props);
    let slicedMedias = [];
    slicedMedias = albums.slice(0, 12);

    return (
      <div className="ui grid">
        <div className="doubling six column row">
          {slicedMedias.map(media => {
            return <Album key={media.id} media={media} dispatch={dispatch} />;
          })}
        </div>
        <Route
          render={({ history, match }) => (
            <div
              className="centered two wide column btn btn--view-more u-padding-none"
              onClick={() => {
                history.push(`/view${match.url}`, { msg, albums });
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
