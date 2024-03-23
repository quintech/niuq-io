// After completing the Google registration login, guide to this page to complete the screen before it can be considered as a completed login
import React, {Component} from "react";
import Navbar from "../../components/navbar";
import {Card, Container, Form, Row} from "react-bootstrap";
import Footer from "../../components/footer";
import {Layout} from "antd";
import {getCacheUserData} from "../../components/login/check-login/check-login";
import Title from "antd/lib/typography/Title";
import {DatePicker} from "react-rainbow-components";
import {signInWithGoogle} from "../../share/service/login/sign-in";
import GuidePageController from "../../components/guide-page/guide-page-controller";
import {dateFormat} from "../../share/service/date/dateFormat";

// Repeated actions
const reAction = () => {
    sessionStorage.clear();
    window.location.href = "/NewsCenter";
}
// Front-end retains login data
const reSignIn = () => {
    const now = new Date()
    let userAccessToken = getCacheUserData('userData').userAccessToken;
    let userGoogleID = getCacheUserData('userData').userGoogleID;
    let userImg = getCacheUserData('userData').userImg;
    let userEmail = getCacheUserData('userData').userEmail;
    let userName = getCacheUserData('userData').userName;
    let useTime = now.getTime() + 86400000;
    let userData = {
        'userAccessToken': userAccessToken,
        'userGoogleID': userGoogleID,
        'userImg': userImg,
        'userEmail': userEmail,
        'userName': userName,
        'useTime': useTime,
    };

    localStorage.setItem('userData', JSON.stringify(userData))
}

// Cancel registration
const cancelRegister = () => {
    reAction();
}

// Wallet location
let wallet_account = '';

// Connect wallet
async function getMetaMaskWallet() {
    if (window.ethereum) {
        const ethereum = window.ethereum;
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        wallet_account = accounts[0];
        let get_account_successful = document.getElementById('get_account_successful');
        get_account_successful.innerText = '';
        get_account_successful.innerText = 'You Select ' + wallet_account;
    } else {
        let get_account_error = document.getElementById('get_account_error');
        get_account_error.innerText = '';
        get_account_error.innerText = 'You need install MetaMask Plugin in your browser!';
    }
}

// Return form error message
function returnErrorMessage(error) {
    if (error.wallet_account !== undefined){
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">wallet_account fill in error.</div>';
    }else if (error.birthday !== undefined){
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">birthday fill in error.</div>';
    }else if (error.gender !== undefined){
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">gender fill in error.</div>';
    }else if (error.country !== undefined){
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">country fill in error.</div>';
    }else if (error.st !== undefined){
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">state fill in error.</div>';
    }else if (error.zip !== undefined){
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">zip fill in error.</div>';
    }else if (error.address !== undefined){
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">address fill in error.</div>';
    }else{
        let google_register_title = document.getElementById('google_register_title');
        google_register_title.innerText = '';
        google_register_title.innerHTML = '';
        google_register_title.innerHTML = '<div class="text-danger">Server Error.</div>';
    }
}

class GoogleSupplementaryInformation extends Component {

    constructor(props) {
        super(props);

        // Detect whether the data has been modified event
        this.birthdayChange = this.birthdayChange.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        // Submit data event
        this.handleSubmit = this.handleSubmit.bind(this);

        // Temporary storage of all form data for better data retrieval after sending
        this.state = {
            wallet_account: "",
            birthday: new Date(),
            gender: true,
            country: "",
            st: "", // Street name is state to avoid conflict
            zip: "",
            address: "",
        }

    }

    componentDidMount() {

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

    // Data submission
    handleSubmit() {
        console.log(Boolean(this.state.gender));
        let userGoogleID = getCacheUserData('userData').userGoogleID;
        let userImg = getCacheUserData('userData').userImg;
        let userEmail = getCacheUserData('userData').userEmail;
        let userName = getCacheUserData('userData').userName;

        // Convert the date to the date format used by the database
        let birthdayToDate = dateFormat(this.state.birthday).toString();

        // Get the wallet location when sending data, it doesn't matter if it is empty
        this.setState({wallet_account: wallet_account});

        // Send data to the database
        // Call API to get status
        let formData = new FormData();
        formData.append('google_id', userGoogleID);
        formData.append('owner_name', userName);
        formData.append('user_img_url', userImg);
        formData.append('email', userEmail);

        formData.append('wallet_account', wallet_account);
        formData.append('birthday', birthdayToDate);
        formData.append('gender', Boolean(this.state.gender));
        formData.append('country', this.state.country);
        formData.append('state', this.state.st);
        formData.append('zip', this.state.zip);
        formData.append('address', this.state.address);

        try {
            signInWithGoogle(formData).then(response => {
                response.json().then(r => {
                    if (r.message === "資料庫新增或是更新使用者帳號資料時發生錯誤。") {
                        let google_register_title = document.getElementById('google_register_title');
                        let register_error_tip = document.getElementById('register_error_tip');
                        register_error_tip.innerText = '';
                        register_error_tip.innerText = 'Registration error: Server Error';
                        google_register_title.innerText = '';
                        google_register_title.innerText = 'Registration error: Server Error';
                    }else if (r.message === 'The given data was invalid.'){
                        // Determine which part of the form is wrong and display it
                        returnErrorMessage(r.errors)
                    } else {
                        // Automatically handle login
                        reSignIn();
                        // Automatic action
                        reAction();
                    }
                })
            }).catch(error => {
                console.error(error);
            })
        } catch (e) {
            console.error(e)
        }
    }

    // Render the screen
    render() {
        return (
            <section>
                {
                    (getCacheUserData('userData') === null) ?
                        (
                            <GuidePageController url="/Login" text="Check Login ... Please Wait ..." time={30}/>
                        )
                        : (
                            <Layout>
                                {/* Navigation bar */}
                                <Navbar/>
                                {/* Content area */}
                                <Container className="my-4">
                                    <Row>
                                        <div className="my-1">
                                            <hr/>
                                        </div>

                                        <div className="google-sign-in-card">
                                            <Title className="my-auto text-center p-5" id="google_register_title"
                                                   level={1}>Almost done,You still need to fill in
                                                some information to get started !
                                            </Title>
                                        </div>

                                        <div className="my-1">
                                            <hr/>
                                        </div>

                                        <section className="col-12 col-lg-12">
                                            <Card>
                                                <Card.Header>
                                                    <div className="d-flex d-md-flex justify-content-center">
                                                        <div className="my-auto mx-2">It is recommended to fill in</div>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="col-lg-12">
                                                        <form className="needs-validation" noValidate>
                                                            <div className="row g-3">

                                                                <div className="mt-4">
                                                                    <div className="h6 text-danger" id="get_account_error"></div>
                                                                    <div className="h6 text-success" id="get_account_successful"></div>
                                                                    <button className="w-100 btn btn-info btn-lg" type="button" onClick={getMetaMaskWallet}>
                                                                        Get the first MetaMask account of your choice
                                                                    </button>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <label htmlFor="google_gender_select">Choose
                                                                        Gender...</label>
                                                                    <Form.Select aria-label="Choose Gender..."
                                                                                 defaultValue="0"
                                                                                 id="google_gender_select"
                                                                                 onChange={this.genderChange}>
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
                                                                           onChange={this.countryChange}/>
                                                                    <span className="floating-label-left">Country</span>
                                                                </div>

                                                                <div className="col-sm-5 mt-4">
                                                                    <input type="text" className="form-control" required
                                                                           onChange={this.stateChange}/>
                                                                    <span className="floating-label-left">State</span>
                                                                </div>

                                                                <div className="col-sm-2 mt-4">
                                                                    <input type="text" className="form-control" required
                                                                           onChange={this.zipChange}/>
                                                                    <span className="floating-label-left">Zip</span>
                                                                </div>

                                                                <div className="">
                                                                    <input type="text" className="form-control" required
                                                                           onChange={this.addressChange}/>
                                                                    <span className="floating-label-left">Address</span>
                                                                </div>
                                                            </div>

                                                            <hr className="my-4"/>

                                                            <span className="text-danger h6 mb-2"
                                                                  id="register_error_tip"> </span>
                                                            <button className="w-100 btn btn-info btn-lg"
                                                                    type="button" onClick={this.handleSubmit}
                                                            >
                                                                Continue to checkout
                                                            </button>
                                                        </form>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </section>
                                        <div className="my-1">
                                            <hr/>
                                        </div>
                                        <section className="row">
                                            <div className="col-12 col-lg-6 mt-3">
                                                <button className="btn w-100 p-1 fs-5 btn-outline-secondary btn-lg"
                                                        onClick={this.handleSubmit}>Fill in next time
                                                </button>
                                            </div>
                                            <div className="col-12 col-lg-6 mt-3">
                                                <button className="btn w-100 p-1 fs-5 btn-outline-danger btn-lg"
                                                        onClick={cancelRegister}>Register next time
                                                </button>
                                            </div>
                                        </section>
                                    </Row>
                                </Container>
                                {/* Footer */}
                                <Footer/>
                            </Layout>
                        )
                }
            </section>
        );
    }
}

export default GoogleSupplementaryInformation;
