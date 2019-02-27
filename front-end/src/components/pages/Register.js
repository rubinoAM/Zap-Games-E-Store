import React, { Component } from 'react';

class Register extends Component{
    render(){
        return(
            <main>
                <center>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row login">
                        <form className="col s12" method="post">
                            <h1>Register</h1>
                            <div className='row'>
                            <div className='col s12'>
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
                                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Register</button>
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

export default Register;