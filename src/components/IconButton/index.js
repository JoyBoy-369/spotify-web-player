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

  render() {
    const { iconLabel, style } = this.props;

    return (
      <button
        className={this.getClassNames()}
        onMouseOver={evt => {
          if (iconLabel === "play")
            this.setState({
              hovered: true
            });
        }}
        onMouseOut={evt => {
          if (iconLabel === "play")
            this.setState({
              hovered: false
            });
        }}
      >
        <i className={`${iconLabel} ${style} icon control-button__icon`} />
      </button>
    );
  }
}
