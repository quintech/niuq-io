import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container} from 'react-bootstrap';
import logo from '../../../../public/images/niuq_logo.svg';
import { Link } from 'react-router-dom';
import PCNavbar from '../navbar/pc-navbar/pc-navbar'
import MobileNavbar from './mobile-navbar/mobile-navbar';

class NavBarMenu extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            //導覽列
            <Navbar collapseOnSelect expand="lg" variant="dark" className="quinNavBar" fixed="top">
                <Container fluid>
                    {/*LOGO 區塊*/}
                    {/* Link 是 React的路由控制 如果使用href 會被導回登入介面*/}
                    <Link to="/" className="fs-3 align-top text-white text-decoration-none">
                        <img alt="" src={logo} width="55" height="55" className="ms-5 pe-3 d-inline"/>
                        <div className="my-auto d-inline">NIUQ</div>
                    </Link>
                    {/*PC版 導覽列*/}
                    <PCNavbar/>
                    {/*手機板 導覽列*/}
                    <MobileNavbar/>
                </Container>
            </Navbar>
        );
    }
}

export default NavBarMenu;
