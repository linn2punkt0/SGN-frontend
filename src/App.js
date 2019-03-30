import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import Nav from "./components/Global/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Nav />
        <Router>
          <Home path="/" />
          <GetInvolved path="/get-involved" />
          <WhoWeAre path="/who-we-are" />
          <WhatWeDo path="/what-we-do" />
          <News path="/news" />
        </Router>
      </div>
    );
  }
}

export default App;
