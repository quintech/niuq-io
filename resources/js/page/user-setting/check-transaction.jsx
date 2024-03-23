import {Badge, Column, TableWithBrowserPagination} from 'react-rainbow-components';
import {Card, Container, Form} from "react-bootstrap";
import React,{useState} from 'react';

import {DatePicker} from "react-rainbow-components/index";
import {getUserData} from "../../components/login/check-login/check-login";
import {getUserTransaction} from "../../share/service/api/transaction";

// Loading display style
let server = {
    "loading": [
        {
            "google_user_uuid": "Server loading...",
            "transaction_hex": "Server loading...",
            "niuq_erc20_quantity": "Server loading...",
        },
    ]
}
// Production data
let data = [];
const CheckTransaction = (props) => {
    if (props.data?.length === 0) {
        return (
            <div className="rainbow-m-bottom_xx-large">
                <TableWithBrowserPagination pageSize={10} data={server.loading} keyField="id">
                    <Column header="Your Name" field="google_user_uuid"/>
                    <Column header="Transaction History" field="transaction_hex"/>
                    <Column header="Niuq" field="niuq_erc20_quantity"/>
                </TableWithBrowserPagination>
            </div>
        );
    }else {
        return (
            <Container className="mb-5">
                <div className="my-3">
                    <div className="h1 text-danger text-center"
                         id="error_edit_profile_message_tip">
                    </div>
                </div>
                <div className="my-3">
                    <div className="h1 text-dark text-center"
                         id="edit_profile_message_tip">
                    </div>
                </div>
                <Card className="mt-5">
                    <Card.Header className="text-center">Your Transaction History</Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-12">
                                <div className="rainbow-m-bottom_xx-large">
                                    <TableWithBrowserPagination pageSize={10} data={props.data} keyField="id">
                                        <Column header="Your Name" field="get_google_user_data.owner_name"/>
                                        <Column header="Transaction History" field="transaction_hex"/>
                                        <Column header="Niuq" field="niuq_erc20_quantity"/>
                                    </TableWithBrowserPagination>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

            </Container>
        );
    }
}
export default CheckTransaction;
