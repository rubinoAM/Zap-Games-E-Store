import React from 'react';

function MiniNav(props){
    const categories = [
        'Nintendo', 'Sega', 'PlayStation', 'Atari',
    ]

    const sections = categories.map((cat,i)=>{
        return(
            <li key={i}><a>{cat}</a></li>
        )
    });

    return(
        <nav>
            <div className="nav-wrapper indigo darken-1">
            <ul className="left hide-on-small-only">
                {sections}
            </ul>
            </div>
        </nav>
    )
}

export default MiniNav;