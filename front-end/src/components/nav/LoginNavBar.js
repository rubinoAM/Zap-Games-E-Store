import React, { Component } from 'react';

function LoginNavBar(props){
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

    return(
        <div className="login-nav-bar">
            <div className="left valign-wrapper brand-logo">ZAP GAMES</div>
            <div className="right hide-on-small-only">
                <button type="submit" class="btn play-button btn-github">Login with github</button>
                <span>MY CART 0 ITEM - $0.00</span>
            </div>
        </div>
    )
}
export default LoginNavBar;