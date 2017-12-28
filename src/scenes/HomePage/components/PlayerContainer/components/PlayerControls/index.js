import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { IconButton } from "src/components";

const buttonLabels = [
  "shuffle",
  "step backward",
  "play",
  "step forward",
  "repeat"
];

class PlayerControls extends Component {
  render() {
    return (
      <div className="six wide column ">
        <div className="player__controls">
          <div className="player__controls-buttons">
            {buttonLabels.map(label => {
              let style;
              if (label === "play") style = "control-button__circled";
              return <IconButton iconLabel={label} style={style} />;
            })}
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
