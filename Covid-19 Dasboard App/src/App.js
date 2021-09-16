import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";



class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <div className="container">                            
          <Switch>
            <Route path="/home" exact component={CovidDashboard} />
            <Route path="/" component={} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;