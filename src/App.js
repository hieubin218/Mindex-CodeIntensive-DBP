import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Router: Component bao bọc tất cả các component khác của routing
// Route: Render component khi match với path
// Switch: chỉ render route đầu tiên khi match
// Link: giống như link nhưng có thêm active classnames
import Home from "./Containers/Home/Home";
import About from "./Containers/About";
import Navbar from "./Layouts/Navbar/Navbar";
import UserDetail from "./Containers/UserDetail/UserDetail";


class App extends Component {
  render() { 
    return (

      // Connect tất cả các Component lớn với nhau --> Bọc trong BrowserRouter
      // <Link> tag: đóng vai trò như <a> tag, props tên là to="url"
      // <Switch> tag: switch giữa các component, pages khác nhau
        // to="..." of <Link> = path="..." of <Route>: phải tương ứng với nhau
      // Những Component không thay đổi (vd: navbar) --> bỏ ngoài <Switch>

      <BrowserRouter>
        <Navbar />

        {/**Cách đều hai bên page thì nên bọc vào div */}
        <div className="container" >

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users/:login" component={UserDetail} />

          </Switch>

        </div>
        

      </BrowserRouter>
    )
  }
};

export default App;