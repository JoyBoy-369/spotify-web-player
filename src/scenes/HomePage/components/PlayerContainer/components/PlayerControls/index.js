import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { IconButton } from "src/components";

class PlayerControls extends Component {
  render() {
    const { clickHandle, shouldPlay } = this.props;
    return (
      <div className="six wide column ">
        <div className="player__controls">
          <div className="player__controls-buttons">
            <IconButton iconLabel="shuffle" clickHandle={clickHandle} />
            <IconButton iconLabel="step backward" clickHandle={clickHandle} />
            <IconButton
              iconLabel={shouldPlay ? "pause" : "play"}
              clickHandle={clickHandle}
              shouldPlay={shouldPlay}
            />
            <IconButton iconLabel="step forward" clickHandle={clickHandle} />
            <IconButton iconLabel="repeat" clickHandle={clickHandle} />
          </div>
          <div className="player__playback-bar">
            <div className="player__playback-bar-time">
              <div>
                <div className="progress-bar">
                  <div className="progress-bar__bg">
                    <div className="progress-bar__fg">
                      <div className="progress-bar__slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerControls;
