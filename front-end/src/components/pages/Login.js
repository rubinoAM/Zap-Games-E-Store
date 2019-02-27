import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './form.css';

class Login extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    loginSubmit = (e)=>{
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
    }

    render(){
        return(
            <main>
                <center>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row login">
                        <form className="col s12" onSubmit={this.loginSubmit}>
                            <div className='row'>
                                <div className='col s12'>
                                    <h1 className="form-header">Log In</h1>
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
                            <label>
                                <a className='indigo-text' href='#!'><b>Forgot Password?</b></a>
                            </label>
                            </div>
                            <br />
                            <center>
                            <div className='row'>
                                <span className="col s3"></span>
                                <button type='submit' name='btn_login' className='col s6 btn btn-large waves-effect indigo form-btn'>Login</button>
                                <span className="col s3"></span>
                            </div>
                            </center>
                        </form>
                        </div>
                    </div>
                    <Link to='/register'>Create account</Link>
                </center>
            </main>
        )
    }
}

export default Login;