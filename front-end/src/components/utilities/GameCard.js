import React from 'react';
import { Link } from 'react-router-dom';

function GameCard(props){
    const image = props.data.screenshot_url.replace('t_thumb','t_cover_big').split(',')[0];

    return(
        <div className="col s12 m6 l3 game-card">
            <Link to={`games/${props.data.id}`}>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img alt="" src={image} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{props.data.name}</span>
                    </div>
                </div> 
            </Link>
        </div>
    )
}

export default GameCard;