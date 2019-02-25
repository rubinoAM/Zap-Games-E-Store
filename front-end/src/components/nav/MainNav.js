import React, { Component } from 'react';

function MainNav(props){
    return(
        <div className="main-nav">
            <nav>
                <div className="nav-wrapper indigo darken-4">
                    <ul className="left hide-on-small-only">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">Location</a></li>
                        <li><a href="collapsible.html">About</a></li>
                        <li><a href="collapsible.html">Contact</a></li>
                    </ul>
                </div>
        </nav>      

        </div>
    )
}
export default MainNav;