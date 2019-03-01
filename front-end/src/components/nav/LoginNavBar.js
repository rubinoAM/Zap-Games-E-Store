import React, { Component } from 'react';
import loginTab from '../../misc/openWindow';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginNavBar extends Component{
    /*
        Process:
        1) User clicks and opens new window via loginTab
        2) New window is open to crossOrigin but is github.com
        3) Once user authenticates, github sends them to /auth/github/callback
        4) The callback URL either gets the uid or inserts them
        5) Callback takes uid and tokenizes it with JWT
        6) Token is sent back to github window that loginTab opened and
           window.opener.postMessage is in the script of that window which
           sends the data back over to the original page
        7) It's now available in this promise resolution
        8) Put it in localstorage so we can use it next time
    */

    githubAuth = (e)=>{
        loginTab('http://localhost:7000/auth/github');
    }

    render(){
        let rightNavBar;
        if(this.props.auth.username !== undefined){
            rightNavBar = <span>
                <span>Welcome, {this.props.auth.username}!</span>
                <Link className="main-link" to="/">Log Out</Link>
            </span>
        }else{
            rightNavBar = <span>
                <Link className="main-link" to="/login">Log In</Link>
                <Link className="main-link" to="/register">Register</Link>
                <button type="button" onClick={this.githubAuth} className="btn btn-github">Login with github</button>    
            </span>
        }

        return(
            <div className="login-nav-bar">
                <Link className="left valign-wrapper brand-logo" to="/">ZAP GAMES</Link>
                <div className="right hide-on-small-only">
                    {rightNavBar}
                    <Link className="main-link" to="/cart">
                        <i className="material-icons">shopping_cart</i>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

/* function mapDispatchToProps(dispatcher){
    return{

    }
} */

export default connect(mapStateToProps)(LoginNavBar);
//export default LoginNavBar;