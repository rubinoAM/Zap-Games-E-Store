import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function MainNav(props){
    return(
        <div className="main-nav">
            <nav>
                <div className="nav-wrapper indigo darken-1">
                <a href="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up">
                    <i className="material-icons">menu</i>
                </a>
                    <ul className="left hide-on-small-only">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/location">Location</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
export default MainNav;