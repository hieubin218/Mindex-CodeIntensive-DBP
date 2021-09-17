import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/home" style={{textDecoration: "none"}}>
                <span className="header">
                    <img src="images/covid-19.jpeg" className="logo" alt="covid" />
                    <p className="navbar_title">COVID-19 DASHBOARD TRACKER</p>
                </span>
            </Link>

            <ul>
                <li>
                    <Link to="/home"
                          style={{textDecoration: "none"}}>
                              DASHBOARD
                    </Link>
                </li>
                <li>
                    <Link to="/about" 
                    style={{textDecoration: "none"}}>
                        ABOUT
                    </Link>
                </li>
            </ul>

        </div>

      

    )
};

export default Navbar;
