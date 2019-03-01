//import React, { Component } from 'react';
import React from 'react';
import LoginNavBar from './LoginNavBar';
import LogoSearchHeader from './LogoSearchHeader';
import MainNav from './MainNav';
import './nav.css'

function Headers(props){
return (
    <div className="header">
        <div className="container-fluid center black">
            <div className="row">
                <LoginNavBar />
            </div>
        </div>
        <div className="container">
            <div className="row">
                <LogoSearchHeader />
            </div>        
            <div className="row">
                <MainNav />
            </div>
        </div>
    </div>
    )
}
export default Headers;