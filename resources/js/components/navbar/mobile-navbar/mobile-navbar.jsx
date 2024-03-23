import React, {useEffect,useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Offcanvas} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {getUserData} from "../../login/check-login/check-login";
import {signOut} from "../../login/sign-out";
import logo from '../../../../../public/images/niuq_logo_dark.svg';
import { useSelector } from 'react-redux';
export default function MobileNavbar(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{});
    
    const state = useSelector((state) => state);

    return (
        <div className="d-lg-none">
            <Navbar.Toggle onClick={handleShow} aria-controls="mobileNavBar"/>
            <Navbar.Offcanvas show={show} onHide={handleClose} id="mobileNavBar" aria-labelledby="mobileNavBarLabel" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="mobileNavBarLabel">
                    <Navbar.Brand>
                        <Link to="/" className="align-items-center d-flex">
                                <img alt="" src={logo} width="55" height="55" className="d-inline me-3"/>
                                {/* <div className="text-dark">
                                    NIUQ LOGO
                                </div> */}
                        </Link>
                    </Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr/>  
                <Link to="/NewsCenter" onClick={handleClose} className="text-center d-block my-2">
                    <Nav.Item>
                        <div className="text-dark mobile-nav-btn">NEWS CENTER</div>
                    </Nav.Item>
                </Link>

                <Link to="/About" onClick={handleClose} className="text-center d-block my-2">
                    <Nav.Item>
                        <div className="text-dark mobile-nav-btn">ABOUT US</div>
                    </Nav.Item>
                </Link>

                <div className="mt-auto">
                    {/* <hr/> */}
                </div>
                <div className="mx-auto mb-2">
                    {
                        //檢測是否為True 如果為True回傳第一個括號否則回傳第二個
                        state?.setUserLoginStatus?.isLogin ?
                            (
                                //檢測到登入成功
                                <Nav.Item className="dropdown my-auto">
                                    <div className="" id="user-menu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <img className="nav-user-image d-inline my-auto"
                                            src={getUserData('userData').userImg} alt="user" width={35}
                                            height={35}/>
                                        <div className="text-dark d-inline mx-2 my-auto">{getUserData('userData').userName}</div>
                                        <div className="text-dark d-inline dropdown-toggle my-auto"/>
                                    </div>
                                    <ul className="dropdown-menu mr-2" aria-labelledby="user-menu">
                                        <li>
                                            <Link to="/UserSettings/EditProfile" onClick={handleClose}>
                                                <div className="dropdown-item">Edit profile</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#" onClick={signOut}>Sign out</a>
                                        </li>
                                    </ul>
                                </Nav.Item>
                            ) : (
                                <Link to="/Login" onClick={handleClose}>
                                    <Nav.Item className="">
                                        <div className="text-dark">LOGIN</div>
                                    </Nav.Item>
                                </Link>
                            )
                    }
                </div>
            </Navbar.Offcanvas>
        </div>
    );
}

