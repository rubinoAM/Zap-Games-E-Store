import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './form.css';
import { bindActionCreators } from 'redux';
import authAction from '../../actions/authAction';
import { connect } from 'react-redux';

class Register extends Component{
    constructor(){
        super()
        this.state = {
            
        }
    }

    registerSubmit = (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        this.props.authAction({ email,password });
    }

    render(){
        return(
            <main>
                <center>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row login">
                        <form className="col s12" onSubmit={this.registerSubmit}>
                            <div className='row'>
                                <div className='col s12'>
                                    <h1 className="form-header">Register</h1>
                                </div>
                            </div>
                            <div className='row'>
                            <div className='input-field col s12'>
                                <input className='validate' type='email' name='email' id='email' />
                                <label htmlFor='email'>Enter your email</label>
                            </div>
                            </div>
                            <div className='row'>
                            <div className='input-field col s12'>
                                <input className='validate' type='password' name='password' id='password' />
                                <label htmlFor='password'>Enter your password</label>
                            </div>
                            </div>
                            <br />
                            <center>
                            <div className='row'>
                                <span className="col s3"></span>
                                <button type='submit' name='btn_register' className='col s6 btn btn-large waves-effect indigo form-btn'>Register</button>
                                <span className="col s3"></span>
                            </div>
                            </center>
                        </form>
                        </div>
                    </div>
                </center>
            </main>
        )
    }
}

function mapStateToProps(state){
    //state: rootReducer/store
    return {
        //Key: this.props.key will be accessible to this component
        //Value: property of rootReducer
        auth:state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    //dispatch:sends the action to all reducers
    return bindActionCreators({
        authAction: authAction,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);