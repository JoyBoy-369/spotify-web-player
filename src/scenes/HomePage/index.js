import React, { Component, Fragment } from "react";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import PlayerContainer from "./components/PlayerContainer";
import { album as albumReducer } from "./services/reducer";

class HomePage extends Component {
  state = albumReducer(undefined, {});

  dispatch = action => {
    this.setState(prevState => albumReducer(prevState, action));
  };

  render() {
    const { playlist, nowPlaying } = this.state;
    return (
      <Fragment>
        <div className="bg" />
        <div className="ui padded grid home-container ">
          <Sidebar {...this.props} />
          <ContentContainer
            dispatch={this.dispatch}
            nowPlaying={nowPlaying}
            {...this.props}
          />
          <PlayerContainer
            playlist={playlist}
            shouldPlay={nowPlaying.shouldPlay}
            dispatch={this.dispatch}
          />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
