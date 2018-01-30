import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class IconButton extends Component {
  state = {
    hovered: false
  };

  getClassNames = () => {
    const { hovered } = this.state;

    return hovered
      ? "ui icon button control-button control-button--hovered"
      : "ui icon button control-button";
  };

  getIconClassNames = () => {
    const { iconLabel, shouldPlay } = this.props;

    if (iconLabel === "play" || iconLabel === "pause")
      return shouldPlay
        ? "pause control-button__circled icon control-button__icon"
        : "play control-button__circled icon control-button__icon";
    else return `${iconLabel} icon control-button__icon`;
  };

  render() {
    const { iconLabel, style, clickHandle } = this.props;

    return (
      <button
        className={this.getClassNames()}
        name={iconLabel}
        onMouseOver={evt => {
          if (iconLabel === "play" || iconLabel === "pause")
            this.setState({
              hovered: true
            });
        }}
        onMouseOut={evt => {
          if (iconLabel === "play" || iconLabel === "pause")
            this.setState({
              hovered: false
            });
        }}
        onClick={evt => {
          clickHandle(iconLabel);
        }}
      >
        <i className={this.getIconClassNames()} />
      </button>
    );
  }
}
