import React from 'react';

function MiniNav(props){
    const categories = [
        'Nintendo', 'Sega', 'PlayStation', 'Atari',
    ]

    const sections = categories.map((cat)=>{
        return(
            <li><a>{cat}</a></li>
        )
    });

    return(
        <nav>
            <div className="nav-wrapper indigo darken-4">
            <ul className="left hide-on-small-only">
                {sections}
            </ul>
            </div>
        </nav>
    )
}

export default MiniNav;