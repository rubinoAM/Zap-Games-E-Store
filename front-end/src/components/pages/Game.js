import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './game.css';

class Game extends Component{
    constructor(){
        super()
        this.state = {
            game:{},
        }
    }

    componentDidMount(){
        const gid = this.props.match.params.id;
        const gameResponse = axios.get(`${window.apiHost}/games/${gid}`);
        gameResponse.then((resp)=>{
            const gameData = resp.data[0];
            this.setState({
                game:gameData,
            })
            console.log(gameData);
        });
    }

    render(){
        let image = "";
        if(this.state.game.screenshot_url){
            image = this.state.game.screenshot_url.split(',')[0];
            image = image.replace('t_thumb','t_cover_big');
        }

        return(
            <div className="game-container">
                <div className="row game-top-section">
                    <div className="col s12 m4">
                        <img alt="" src={image} className="game-pic" />
                    </div>
                    <div className="col s12 m8">
                        <div className="row game-main-details">
                            <h3 className="game-title">{this.state.game.name}</h3>
                            <div className="game-desc">
                                {this.state.game.summary}    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s1">
                                <span>Qty:</span>
                            </div>
                            <div className="col s8">
                                <input type="text" name="quantity"/>
                            </div>
                            <div className="col s2">
                                <button className="btn amber lighten-2 black-text waves-effect waves-dark">ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row game-bottom-section">
                    <div className="col s12 m4">
                        <span className="btm-header">TAGS</span>
                        <p></p>
                    </div>
                    <div className="col s12 m8">
                        <span className="btm-header">DETAILS</span>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;