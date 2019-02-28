import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './game.css';

class Game extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="game-container">
                <div className="row">
                    <div className="col s12">
                        <h1>GAME TITLE</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        <img src="http://via.placeholder.com/300" alt="" className="game-pic" />
                    </div>
                    <div className="col s12 m8">
                        <p>D</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;