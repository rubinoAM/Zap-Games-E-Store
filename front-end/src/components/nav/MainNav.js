import React, { Component } from 'react';

function MainNav(props){
    return(
        <div className="main-nav">
            <nav>
                <div className="nav-wrapper indigo darken-4">
                    <ul className="left hide-on-small-only">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
        </nav>      

        </div>
    )
}
export default MainNav;