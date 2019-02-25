import React from 'react';
import GameCard from '../utilities/GameCard';

function Content(props){
    return(
        <div className="row content-container">
            <div className="col s12">
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </div>
        </div>
    )
}

export default Content;