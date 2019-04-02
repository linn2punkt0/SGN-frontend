import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Nav from "./components/Global/Nav";
import Home from "./components/Pages/Home/Home";
import GetInvolved from "./components/Pages/Get-involved/GetInvolved";
import WhoWeAre from "./components/Pages/Who-we-are/WhoWeAre";
import WhatWeDo from "./components/Pages/What-we-do/WhatWeDo";
import News from "./components/Pages/News/News";
import Contact from "./components/Pages/Contact/Contact";

class App extends Component {
  componentDidMount = () => {
    this.fetchActivities();
  };

  fetchActivities = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/activities`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  fetchBranches = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/branches`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  fetchPartners = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/partners`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  fetchProjects = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/projects`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };

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
          <Contact path="/contact" />
        </Router>
      </div>
    );
  }
}

export default App;
