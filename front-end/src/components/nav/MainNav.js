import React, { Component } from 'react';

function MainNav(props){
    return(
        <div className="main-nav">
            <nav>
                <div className="nav-wrapper indigo darken-1">
                <a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-med-and-up">
                    <i class="material-icons">menu</i>
                </a>
                    <ul className="left hide-on-small-only">
                        <li><a>Home</a></li>
                        <li><a>Location</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><a>Home</a></li>
                <li><a>Location</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}
export default MainNav;