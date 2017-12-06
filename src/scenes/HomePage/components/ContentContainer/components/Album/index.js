import React, { Component } from "react";
import { Link } from "react-router-dom";

class Album extends Component {
  render() {
    return (
      <div class="ui three column grid">
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src="/images/avatar/large/daniel.jpg" />
            </div>
            <div class="content">
              <a class="header">Daniel Louise</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src="/images/avatar/large/helen.jpg" />
            </div>
            <div class="content">
              <a class="header">Helen Troy</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src="/images/avatar/large/elliot.jpg" />
            </div>
            <div class="content">
              <a class="header">Elliot Fu</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;