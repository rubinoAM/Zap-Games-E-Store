import React, { Component } from 'react';

function LogoSearchHeader(props){
    return(
        <div className="logo-search-header">
            <div class="input-field col s12">
                <i class="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" class="validate"/>
                <label for="icon_prefix">Search</label>
            </div>         
        </div>
    )
}
export default LogoSearchHeader;