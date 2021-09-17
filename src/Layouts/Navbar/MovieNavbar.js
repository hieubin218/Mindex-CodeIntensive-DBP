// Navbar not use State, use Component function
import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

// Design Navbar at top of page
// <Link> giống thẻ <a>
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="header-content">
                <Link to="/home">
                    <img src="images/ReactMovie.png"  className="FilmLogo" alt="logo" />
                </Link>

                <span>
                    <img src="images/react-native-UX-design.gif" className="ReactGif" alt="ReactLogo" />
                </span>
            </div>
        </div>
    )
};

export default Navbar;

