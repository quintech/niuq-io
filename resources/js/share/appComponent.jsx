import { Outlet, useNavigation } from 'react-router-dom'
import React, {Component} from 'react';

import Footer from "../components/footer/index";
import { Layout } from 'antd';
import Navbar from "../components/navbar";
import {checkLogin} from "../components/login/check-login/check-login";
import { connect } from 'react-redux'

const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 275.5344px)'
};

class AppComponent extends Component
{
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        checkLogin.then(()=>{}).catch(()=>{});
    }

    render() {
        return (
            <Layout>
                {/* Navigation Bar */}
                <Navbar/>
                {/* Content */}
                <section style={sectionStyle}>
                    <Outlet/>
                </section>
                {/* Footer */}
                <Footer/>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    };
};
export default connect(mapStateToProps)(AppComponent);