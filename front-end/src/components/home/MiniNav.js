import React from 'react';

function MiniNav(props){
    const categories = [
        'Nintendo', 'Sega', 'PlayStation', 'Atari',
    ]

    return(
        <nav>
            <div className="nav-wrapper indigo darken-4">
            <ul className="left hide-on-med-and-down">
                <li><a>Sass</a></li>
                <li><a>Components</a></li>
                <li className="active"><a>JavaScript</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default MiniNav;