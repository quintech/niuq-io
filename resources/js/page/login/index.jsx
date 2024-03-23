import React, { Component } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import { Link, useOutletContext } from 'react-router-dom';

import { connect } from 'react-redux';
import GuidePageController from "../../components/guide-page/guide-page-controller";
import { mapStateToProps } from '../../share/modal/map/map';
import { login } from "../../share/service/account/login";
import { register } from "../../share/service/account/register";
import { GoogleSignIn } from "./google-sign-in";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isMobile: false,
          account:'',
          password:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    componentDidMount() {
        // Function to detect mobile devices
        function detectMobile() {
          var userAgent = navigator.userAgent || navigator.vendor || window.opera;
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        }
        // Execute mobile device detection when the component mounts
        this.setState({ isMobile: detectMobile() });
      }


    handleInputChange(event) {
        const target = event.target;
        const { value, name } = target;
    
        this.setState({
          [name]: target.value
        });
    }

    handleLogin(props){
        event.preventDefault();
        login(this.state);
    }

    handleRegister(){
        event.preventDefault();
        register(this.state);
    }

    render() {
        const { isMobile } = this.state;
        return (
            <section>
                {
                    this.props?.data?.setUserLoginStatus?.isLogin ?
                        (
                            <GuidePageController url="/NewsCenter" text="Check Login ..." time={30}/>
                        ) : (
                            <Container className="my-4">
                                <Row>
                                    {/* This block only appears on PC or tablet screens */}
                                    <section className="d-none d-md-none d-lg-block col-lg-6">
                                        <div className="">
                                            <div className="d-flex justify-content-center my-5">
                                                <svg className="login-logo" xmlns="https://www.w3.org/2000/svg" id="圖層_1" data-name="圖層 1" viewBox="0 0 48.12 48.12">
                                                    <rect className="cls-1" x="22.5" y="27.61" width="3.13" height="7.13"/>
                                                    <path className="cls-1" d="M24.06,14a9.62,9.62,0,0,0-4,18.36V28.66a6.5,6.5,0,1,1,8.06,0v3.67a9.62,9.62,0,0,0-4-18.36Z"/>
                                                    <path className="cls-1" d="M29.24,8.15v3.32a13.71,13.71,0,1,1-10.36,0V8.15a16.84,16.84,0,1,0,10.36,0Z"/>
                                                    <path className="cls-1" d="M48.12,24.06a24.12,24.12,0,1,0-9.3,19l-2.35-2.15A20.75,20.75,0,0,1,24.06,45a21,21,0,1,1,17-8.73l-.43.56,2.53,2.07s1.24-2,1.64-2.69A23.45,23.45,0,0,0,48.12,24.06Z"/>
                                                </svg>
                                            </div>
                                            <div className="text-dark h2 my-5 text-center">NIUQ</div>
                                        </div>
                                    </section>
                                    <section className="col-12 col-lg-6">
                                        {/* <button onClick={this.props.showVar} className="btn btn-secondary">showVar</button> */}
                                        <Card>
                                            <Card.Header>
                                                {/* Style only visible on mobile devices */}
                                                <div className="d-flex d-md-flex d-lg-none justify-content-center">
                                                    <svg className="mobile-login-logo" xmlns="https://www.w3.org/2000/svg" id="圖層_1" data-name="圖層 1" viewBox="0 0 48.12 48.12">
                                                        <rect className="cls-1" x="22.5" y="27.61" width="3.13" height="7.13"/>
                                                        <path className="cls-1" d="M24.06,14a9.62,9.62,0,0,0-4,18.36V28.66a6.5,6.5,0,1,1,8.06,0v3.67a9.62,9.62,0,0,0-4-18.36Z"/>
                                                        <path className="cls-1" d="M29.24,8.15v3.32a13.71,13.71,0,1,1-10.36,0V8.15a16.84,16.84,0,1,0,10.36,0Z"/>
                                                        <path className="cls-1" d="M48.12,24.06a24.12,24.12,0,1,0-9.3,19l-2.35-2.15A20.75,20.75,0,0,1,24.06,45a21,21,0,1,1,17-8.73l-.43.56,2.53,2.07s1.24-2,1.64-2.69A23.45,23.45,0,0,0,48.12,24.06Z"/>
                                                    </svg>
                                                    <div className="my-auto mx-2">NIUQ Login</div>
                                                </div>
                                                {/* PC screen */}
                                                <div className="d-none d-md-none d-lg-flex justify-content-center text-dark">
                                                    Welcome
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <div className="col-12 mt-4">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="account" 
                                                            value={this.state.account}
                                                            onChange={this.handleInputChange} required
                                                        />
                                                        <span className="floating-label-left">Account</span>
                                                    </div>

                                                    <div className="col-12 mt-4">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="password" 
                                                            value={this.state.password}
                                                            onChange={this.handleInputChange} required
                                                        />
                                                        <span className="floating-label-left">Password</span>
                                                    </div>

                                                    <div className="d-flex justify-content-between bd-highlight mb-3">
                                                        <div className="p-2 bd-highlight">
                                                            <Form.Check type="checkbox" label="remember me"/>
                                                        </div>
                                                        {/*<div className="p-2 bd-highlight h5">*/}
                                                        {/*    <Link to="/ForgotPassword">*/}
                                                        {/*        Forgot your password?*/}
                                                        {/*    </Link>*/}
                                                        {/*</div>*/}
                                                    </div>

                                                    <div className="d-grid gap-2 ">
                                                        <button onClick={this.handleLogin} className="btn btn-outline-info h5">Sign in</button>
                                                    </div>

                                                    <div className="my-3 h5 text-center">
                                                        <Link to="/ForgotPassword">
                                                            Forgot your password?
                                                        </Link>
                                                    </div>

                                                    <hr/>
                                                    {/* Register */}
                                                    <div className="d-grid gap-2">
                                                        <label className="text-center">Don't have an account yet?</label>
                                                        <button onClick={this.handleRegister} className="btn btn-secondary">Register now</button>
                                                    </div>
                                                    {!this.state.isMobile && (
                                                        <div>
                                                            <hr/>
                                                            <div className="h5 text-center">
                                                                Sign in with Google
                                                            </div>
                                                            <GoogleSignIn/>
                                                        </div>
                                                    )}
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </section>
                                </Row>
                            </Container>
                        )
                }
            </section>
        );
    }
}
  
// Use the connect function to connect the component to the Redux store
export default connect(mapStateToProps)(Login);
