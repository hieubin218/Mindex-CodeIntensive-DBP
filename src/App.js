import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

// Router: Component bao bọc tất cả các component khác của routing
// Route: Render component khi match với path
// Switch: chỉ render route đầu tiên khi match
// Link: giống như link nhưng có thêm active classnames
import Home from "./Containers/Home";
import About from "./Containers/About";
import Dashboard from "./Containers/Dashboard";
import Navbar from "./Layouts/Navbar";


function App() {
  
  return (
    // Connect tất cả các Component lớn với nhau --> Bọc trong BrowserRouter
    // <Link> tag: đóng vai trò như <a> tag, props tên là to="url"
    // <Switch> tag: switch giữa các component, pages khác nhau
      // to="..." of <Link> = path="..." of <Route>: phải tương ứng với nhau
    // Những Component không thay đổi (vd: navbar) --> bỏ ngoài <Switch>

    <BrowserRouter>
      <Navbar />
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul> */}

      <Switch>
        {/** Ứng với những trang tương ứng
          truyền vào props: path */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />

          {/** Cách khác về <Route>
            1. <Route exact path="/">
                  <Home />
               </Route>
            2. <Route path="/" exact render={ () => <Home /> } />
            
             */}
       

      </Switch>

    </BrowserRouter>
  );
};

export default App;