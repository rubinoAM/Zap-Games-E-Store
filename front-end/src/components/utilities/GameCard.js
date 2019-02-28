import React from 'react';

function GameCard(props){
    const images = props.data.screenshot_url.split(',');
    let ran = Math.floor(Math.random() * images.length);

    return(
        <div className="col s12 m6 l3 game-card">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <img alt="" className="activator" src={images[ran]} />
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.data.name}</span>
                <p><a href="#">Purchase</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.data.name}<i className="material-icons right">close</i></span>
                <p>{props.data.summary}</p>
                </div>
            </div> 
        </div>
    )
}

export default GameCard;