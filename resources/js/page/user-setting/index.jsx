import React, { Component } from "react";

import CheckTransaction from "./check-transaction";
import { Container } from "react-bootstrap";
import EditUserSetting from "./edit-user-setting";
import Footer from "../../components/footer";
import GuidePageController from "../../components/guide-page/guide-page-controller";
import { Layout } from "antd";
import Navbar from "../../components/navbar";
import { connect } from 'react-redux';
import {getUserData} from "../../components/login/check-login/check-login";
import {getUserTransaction} from "../../share/service/api/transaction";
import { mapStateToProps } from '../../share/modal/map/map';

class UserSetting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let userData = getUserData('userData');
        getUserTransaction(userData).then( (response) =>{
            let data = [];
            response.transactionData.map((value, index, array) => {
                data[index] = value;
            })
            this.setState({data: data});
        }).catch(err=>{
            this.setState({data: []});
        });
    }

    render() {
        return (
            <section>
                {
                    !this.props?.data?.setUserLoginStatus?.isLogin ?
                        (
                            <GuidePageController url="/Login" text="Please login first . . ." time={30}/>
                        ) : (
                            <section>
                                /*Edit user profile section*/}
                                <EditUserSetting/>
                                /*Get user transaction history*/}
                                <CheckTransaction data={this.state.data}
                                />
                            </section>
                        )
                }
            </section>
        );
    }
}

export default connect(mapStateToProps)(UserSetting);
