import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import CovidDashboard from "./Pages/CovidDashboard/CovidDashboard";
import CountryInformation from "./Pages/CountryInformation/CountryInformation";
import About from "./Pages/About/About";
import Navbar from "./Layouts/Covid Navbar/Navbar";

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">                            
          <Switch>
            <Route path="/home" exact component={CovidDashboard} />
            <Route path="/country:id" component={CountryInformation} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;