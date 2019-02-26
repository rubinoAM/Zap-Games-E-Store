import React, { Component } from 'react';

function LogoSearchHeader(props){
    return(
        <div className="logo-search-header">
            <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" className="validate"/>
                <label htmlFor="icon_prefix">Search</label>
            </div>         
        </div>
    )
}
export default LogoSearchHeader;