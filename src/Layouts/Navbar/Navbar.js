// Navbar not use State, use Component function
import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


// Design Navbar at top of page
// <Link> giống thẻ <a>
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <p className="navbar_title">Github Finder</p>
            </Link>
            
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

        </div>
    )
};

export default Navbar;

