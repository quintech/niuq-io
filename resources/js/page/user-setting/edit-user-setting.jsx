import { Card, Container, Form } from "react-bootstrap";
import React, { Component } from "react";

import { DatePicker } from "react-rainbow-components/index";
import { connect } from "react-redux";
import { dateFormat } from "../../share/service/date/dateFormat";
import { getGoogleAccountData } from "../../share/service/login/get-account-data";
import { getUserData } from "../../components/login/check-login/check-login";
import { mapStateToProps } from "../../share/modal/map/map";
import { userEditProfile } from "../../share/service/login/sign-in";

class EditUserSetting extends Component{

    constructor(props) {
        super(props);

        // Temporary storage for all form data for better data retrieval after submission
        this.state = {
            niuq_id: "",
            birthday: new Date(),
            gender: "",
            country: "",
            st: "", // Street name is "state" to avoid conflict
            zip: "",
            address: "",
        }

        // Detect if there is a data modification event
        this.niuqWalletChange = this.niuqWalletChange.bind(this);
        this.birthdayChange = this.birthdayChange.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        // Submit data event
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Check if the user has logged in
        if (this.props?.data?.setUserLoginStatus?.isLogin) {
            let userData = getUserData('userData');

            getGoogleAccountData(userData.userGoogleID).then(res => {
                if (res.data.wallet_account != null) {
                    this.setState({niuq_id: res.data.wallet_account})
                }
                if (res.data.gender === 0) {
                    this.setState({gender: "false"})
                } else if (res.data.gender === 1) {
                    this.setState({gender: "true"})
                } else {
                    this.setState({gender: "0"})
                }
                if (res.data.birthday != null) {
                    this.setState({birthday: res.data.birthday})
                }
                if (res.data.country != null) {
                    this.setState({country: res.data.country})
                }
                if (res.data.state != null) {
                    this.setState({st: res.data.state})
                }
                if (res.data.zip != null) {
                    this.setState({zip: res.data.zip})
                }
                if (res.data.address != null) {
                    this.setState({address: res.data.address})
                } 
            }).catch(err => {
                console.log('getGoogleAccountData-err');
                console.log(err);
            })
        }
        this.forceUpdate()
    }

    //Niuq錢包修改
    niuqWalletChange(event) {
        this.setState({niuq_id: event.target.value});
    }

    birthdayChange(event) {
        this.setState({birthday: event.target.value});
    }

    genderChange(event) {
        this.setState({gender: event.target.value});
    }

    countryChange(event) {
        this.setState({country: event.target.value});
    }

    stateChange(event) {
        this.setState({st: event.target.value});
    }

    zipChange(event) {
        this.setState({zip: event.target.value});
    }

    addressChange(event) {
        this.setState({address: event.target.value});
    }

    handleSubmit() {

        let userData = getUserData('userData');
        let userGoogleID = userData.userGoogleID;

        let birthdayToDate = dateFormat(this.state.birthday).toString();

        // Send data to the database
        // Call API to get status
        let formData = new FormData();
        formData.append('google_id', userGoogleID);
        formData.append('niuq_id', this.state.niuq_id);
        formData.append('birthday', birthdayToDate);
        formData.append('gender', this.state.gender);
        formData.append('country', this.state.country);
        formData.append('state', this.state.st);
        formData.append('zip', this.state.zip);
        formData.append('address', this.state.address);

        let edit_profile_message_tip = document.getElementById('edit_profile_message_tip');
        let error_edit_profile_message_tip = document.getElementById('error_edit_profile_message_tip');
        try {
            userEditProfile(formData).then(response => {
                if (response.message === "Failed to edit user data in the database.") {
                    error_edit_profile_message_tip.innerText = response.Reason;
                } else {
                    edit_profile_message_tip.innerText = "Successful";
                };
            }).catch(error => {
                console.error(error);
            })
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return(
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
                    <Card.Header className="text-center">Edit Profile</Card.Header>
                    <Card.Body>
                        <section className="row">

                            <div className="col-12 mt-4">
                                <input type="text" className="form-control" required
                                       value={this.state.niuq_id}
                                       onChange={this.niuqWalletChange}
                                       id="niuq_Wallet"
                                />
                                <span className="floating-label-left">Niuq Wallet</span>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="google_gender_select">Choose
                                    Gender...</label>
                                <Form.Select aria-label="Choose Gender..."
                                             value={this.state.gender}
                                             id="google_gender_select"
                                             onChange={this.genderChange}
                                >
                                    <option value="0" disabled>Open this select menu
                                    </option>
                                    <option value="true">Male</option>
                                    <option value="false">Female</option>
                                </Form.Select>
                            </div>

                            <div className="form-group col-md-6">
                                <div
                                    className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                                    <DatePicker
                                        value={this.state.birthday}
                                        onChange={value => this.setState({birthday: value})}
                                        label="Birthday" required={false}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-5 mt-4">
                                <input type="text" className="form-control" required
                                       value={this.state.country}
                                       onChange={this.countryChange}
                                />
                                <span className="floating-label-left">Country</span>
                            </div>

                            <div className="col-sm-5 mt-4">
                                <input type="text" className="form-control" required
                                       value={this.state.st}
                                       onChange={this.stateChange}
                                />
                                <span className="floating-label-left">State</span>
                            </div>

                            <div className="col-sm-2 mt-4">
                                <input type="text" className="form-control" required
                                       value={this.state.zip}
                                       onChange={this.zipChange}
                                />
                                <span className="floating-label-left">Zip</span>
                            </div>

                            <div className="col-12">
                                <input type="text" className="form-control" required
                                       value={this.state.address}
                                       onChange={this.addressChange}
                                />
                                <span className="floating-label-left">Address</span>
                            </div>

                            <hr/>

                            <div className="col-12 my-1">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-skyBlue" type="button"
                                            onClick={this.handleSubmit}>Edit
                                    </button>
                                </div>
                            </div>
                        </section>
                    </Card.Body>
                </Card>

            </Container>
        );
    }
}

export default connect(mapStateToProps)(EditUserSetting);
