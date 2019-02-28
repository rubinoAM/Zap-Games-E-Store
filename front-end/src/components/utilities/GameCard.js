import React from 'react';

function GameCard(props){
    const images = props.data.screenshot_url.split(',');
    let ran = Math.floor(Math.random() * images.length);

    return(
        <div className="col s6 l3 game-card">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <img alt="" className="activator" src={images[ran]} />
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.data.name}<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div> 
        </div>
    )
}

export default GameCard;