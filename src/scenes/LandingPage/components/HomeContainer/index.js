import React, { Component } from "react";
import TopContainer from "./components/TopContainer";

const HomeContainer = props => (
  <div className="ui contanier home-container">
    <TopContainer {...props} />
  </div>
);

export default HomeContainer;
