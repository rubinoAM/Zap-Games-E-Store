import React, { Component } from 'react';
import axios from 'axios';
import GameCard from '../utilities/GameCard';

class Content extends Component{
    constructor(){
        super()
        this.state = {
            games: [],
        }
    }

    componentDidMount(){
        const gamesPromise = axios.get(`${window.apiHost}/games/getHome`);
        gamesPromise.then((res)=>{
            const games = res.data;
            this.setState({
                games: games,
            })
        });
    }

    render(){
        const gameCards = this.state.games.map((game,i)=>{
            return <GameCard key={i} data={game}/>
        })

        return(
            <div className="row content-container">
                <div className="col s12">
                    {gameCards}
                </div>
            </div>
        )
    }
}

export default Content;