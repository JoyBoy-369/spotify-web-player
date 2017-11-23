import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import logo from "images/logo-white-2x.png";

import Home from "./components/HomeContainer";

class LandingPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  state = {
    shouldRedirect: false
  };

  clickHandler = evt => {
    evt.preventDefault();
    this.setState({
      shouldRedirect: true
    });
  };

  render() {
    if (this.state.shouldRedirect) {
      return <Home {...this.props} />;
    } else {
      return (
        <div className="ui fluid container landing-page u-center-text">
          <div className="ui grid">
            <div className="seven wide right aligned column left-container">
              <div className="ui middle aligned padded grid">
                <div className="row">
                  <div className="seven wide column">&nbsp;</div>
                  <div className="seven wide left aligned column left-container__logo-box u-padding-none">
                    <img
                      src={logo}
                      alt="logo"
                      className="left-container__logo"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="five wide column">&nbsp;</div>
                  <div className="ten wide column u-padding-none">
                    <button
                      className="btn btn--green"
                      onClick={this.clickHandler}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="row seperator-container">
                  <div className="five wide column">&nbsp;</div>
                  <div className="one wide column seperator-container__seperator-line">
                    &nbsp;
                  </div>
                  <div className="eight wide center aligned column seperator-container__seperator-text u-padding-none">
                    <p>Already have an account?</p>
                  </div>
                  <div className="one wide column seperator-container__seperator-line">
                    &nbsp;
                  </div>
                </div>
                <div className="row">
                  <div className="five wide column">&nbsp;</div>
                  <div className="ten wide column u-padding-none">
                    <button
                      className="btn btn--white"
                      onClick={this.clickHandler}
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="seven wide column right-container">
              <div className="ui aligned padded grid">
                <div className="left aligned row right-container__header-box">
                  <div className="column">
                    <h1 className="main-header">
                      Get the right music, right now
                    </h1>
                    <h2 className="secondary-header">
                      Listen to million of songs for free
                    </h2>
                  </div>
                </div>
                <div className="container">
                  <div className="ui list feature-list">
                    <div className="item">
                      <i className="checkmark icon feature-list__icon" />
                      <div className="content">
                        <div className="header feature-list__text">
                          Search & discover music you love
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <i className="checkmark icon feature-list__icon" />
                      <div className="content">
                        <div className="header feature-list__text">
                          Create playlists of your favourite music
                        </div>
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
}

export default LandingPage;
