import React, { Component } from 'react';

function LogoSearchHeader(props){
    return(
        <div className="logo-search-header">
            <div className="left-align col search-icon">
                <i className="small material-icons">search</i>
            </div>
            <div className="right-align col search-input">
                <input type="text" placeholder="Search" />
            </div>            
        </div>
    )
}
export default LogoSearchHeader;