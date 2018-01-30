import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import { service as ClientApi } from "src/services";
import Album from "../Album";

class AlbumsContainer extends Component {
  state = {
    showAll: false,
    currentId: undefined
  };

  clickHandle = evt => {
    this.setState({
      showAll: true
    });
  };

  clickMediaHandle = (media, play) => {
    const { dispatch } = this.props;

    this.setState({
      currentId: media.id
    });

    dispatch({
      type: "playlist/current",
      playlist: media,
      nowPlaying: { currentId: media.id, shouldPlay: play }
    });
  };

  render() {
    const { albums, msg, dispatch, nowPlaying } = this.props,
      { showAll, currentId } = this.state;

    let slicedMedias = [];
    slicedMedias = albums.slice(0, 12);

    return (
      <div className="ui grid">
        <div className="doubling six column row">
          {slicedMedias.map(media => {
            return (
              <Album
                key={media.id}
                media={media}
                dispatch={dispatch}
                nowPlaying={nowPlaying}
                clickMediaHandle={this.clickMediaHandle}
              />
            );
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
