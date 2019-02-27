import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './form.css';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            msg: "",
            showAlert: false,
        }
    }

    componentWillReceiveProps(newProps){
        //console.log(newProps);
        if(newProps.auth.msg === 'userNotFound'){
            this.setState({
                showAlert: true,
            })
        } else if (newProps.auth.msg === 'badPassword'){
            this.setState({
                showAlert: true,
            })
        } else if (newProps.auth.msg === 'loggedIn'){
            this.props.history.push('/');
        }
    }

    loginSubmit = (e)=>{
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        this.props.loginAction({ username,password });
    }

    render(){
        let swAlert;
        if(this.state.msg === 'userNotFound'){
            swAlert = <SweetAlert 
                            show={this.state.showAlert}
                            title="User Not Found"
                            text="There is no user in our system with this name. Please try again."
                            onConfirm={()=> this.setState({
                                showAlert:false,
                            })}
                        />
        } else if(this.state.msg === 'loggedIn'){
            swAlert = <SweetAlert 
                            show={this.state.showAlert}
                            title="Wrong Password"
                            text="The password you entered is incorrect. Please try again."
                            onConfirm={()=> this.setState({
                                showAlert:false,
                            })}
                        />
        }

        return(
            <main>
                <SweetAlert 
                    show={this.state.showAlert}
                    title="Registration Error"
                    text="This email is already registered with us. Please login or try a different email address."
                    onConfirm={()=> this.setState({
                        showAlert:false,
                    })}
                />
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
        loginAction: loginAction,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);