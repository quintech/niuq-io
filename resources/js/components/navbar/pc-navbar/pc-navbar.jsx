import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {checkLogin, getUserData} from "../../login/check-login/check-login";
import {signOut} from "../../login/sign-out";
import { connect } from 'react-redux'
import {mapStateToProps} from '../../../share/modal/map/map';
class PCNavbar extends Component {

    constructor(props) {
        super(props);
        window['PC'] = this;
    }
    
    componentDidMount(){
    }

    render() {
        return (
            //PC版本的Nav
            <Nav className="d-none d-lg-flex">
                <Link to="/NewsCenter">
                    <Nav.Item className="NiuqNavBarBtn px-5 py-3 my-auto">
                        <div className="text-white">NEWS CENTER</div>
                    </Nav.Item>
                </Link>
                <Link to="/About">
                    <Nav.Item className="NiuqNavBarBtn px-5 py-3 my-auto">
                        <div className="text-white">ABOUT US</div>
                    </Nav.Item>
                </Link>
                {
                    //檢測是否為True 如果為True回傳第一個括號否則回傳第二個
                    this.props?.data?.setUserLoginStatus?.isLogin ?
                        (
                            //檢測到登入成功
                            <Nav.Item className="navUser dropdown my-auto">
                                <div className="" id="user-menu" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="nav-user-image d-inline my-auto"
                                         src={getUserData('userData').userImg} alt="user" width={35} height={35}/>
                                    <div
                                        className="text-white d-inline mx-2 my-auto">{getUserData('userData').userName}</div>
                                    <div className="text-white d-inline dropdown-toggle my-auto"/>
                                </div>
                                <ul className="dropdown-menu mr-2" aria-labelledby="user-menu">
                                    <li>
                                        <Link to="/UserSettings/EditProfile">
                                            <div className="dropdown-item">Edit profile</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#" onClick={signOut}>Sign out</a></li>
                                </ul>
                            </Nav.Item>
                        ) : (
                            <Link to="/Login">
                                <Nav.Item className="NiuqNavLogBtn px-5 py-3">
                                    LOGIN
                                </Nav.Item>
                            </Link>
                        )
                }
            </Nav>
        )
    }
}

export default connect(mapStateToProps)(PCNavbar);