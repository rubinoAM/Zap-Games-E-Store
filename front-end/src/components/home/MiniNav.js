import React from 'react';

function MiniNav(props){
    const categories = [
        'Nintendo', 'Sega', 'PlayStation', 'Atari', 'Intellivision', 'PC',
    ]

    const sections = categories.map((cat,i)=>{
        return(
            <li key={i}><a>{cat}</a></li>
        )
    });

    return(
        <div>
            <nav>
                <div className="nav-wrapper indigo darken-1">
                <a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-med-and-up">
                    <i class="material-icons">menu</i>
                </a>
                <ul className="left hide-on-small-only">
                    {sections}
                </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                {sections}
            </ul>
        </div>
    )
}

export default MiniNav;