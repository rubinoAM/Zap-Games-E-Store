import React, { Component } from 'react';
import axios from 'axios';
import './game.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateCart from '../../actions/updateCart';
import idgbKey from '../../misc/config';

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

        /* const getTags = axios({
            url: "https://api-v3.igdb.com/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': idgbKey,
            },
            data: "fields tags;"
        }).then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
        }); */
    }

    addToCart = (e)=>{
        const token =  this.props.token;
        const gameId = this.state.game.id;
        this.props.updateCart(token,gameId);
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
                                <button onClick={this.addToCart} className="btn amber lighten-2 black-text waves-effect waves-dark">ADD</button>
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

function mapStateToProps(state){
    return({
        auth: state.atuh
    })
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        updateCart: updateCart,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);