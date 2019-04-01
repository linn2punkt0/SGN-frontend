import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import Nav from "./components/Global/Nav";
import Home from "./components/Pages/Home/Home";
import GetInvolved from "./components/Pages/Get-involved/GetInvolved";
import WhoWeAre from "./components/Pages/Who-we-are/WhoWeAre";
import WhatWeDo from "./components/Pages/What-we-do/WhatWeDo";
import News from "./components/Pages/News/News";

class App extends Component {
  render() {
    return (
      <div className="App">
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
