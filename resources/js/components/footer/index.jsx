import {Component} from 'react';
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {AiTwotoneMail} from "@react-icons/all-files/ai/AiTwotoneMail";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaWpforms} from "@react-icons/all-files/fa/FaWpforms";
import {MdAttachMoney} from "@react-icons/all-files/md/MdAttachMoney";
import {AiFillFileText} from "@react-icons/all-files/ai/AiFillFileText";

class Footer extends Component{
    render() {
        return (
            <MDBFooter className='text-lg-left footerStyle'>
                <div className='p-5'>
                    <MDBRow>
                        <MDBCol lg='3' md='6' sm='6' className=''>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href="https://us18.list-manage.com/contact-form?u=7803c7ebc6985c6280b3ccba1&form_id=3966019141553e6e9db47fa984e89dfd" target="_blank" className="dark-blue">
                                        <AiTwotoneMail className="footer-icon mx-1"/>
                                        Contact
                                    </a>
                                </li>
                                {/*<li>*/}
                                {/*    <Link to="" className='text-dark' target="_blank">*/}
                                {/*        Terms & Conditions*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' sm='6' className=''>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href="https://twitter.com/niuq_io?s=20&t=679M672f9kvEzYLiOyzieQ" target="_blank"
                                       className="dark-blue">
                                        <FaTwitter className="footer-icon mx-1"/>
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' sm='6'>
                            <ul className='list-unstyled'>
                                <li>
                                    <a className="dark-blue" href="https://cash.app/$Niuqio" target="_blank">
                                        <MdAttachMoney className="footer-icon mx-1"/>
                                        Support Us
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' sm='6'>
                            <ul className='list-unstyled'>
                                <li>
                                    <a className="dark-blue" href="https://app.termly.io/notify/0063692d-1fb3-4847-a47d-9327247534fa" target="_blank">
                                        <FaWpforms className="footer-icon mx-1"/>
                                        DSAR form
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg='3' md='6' sm='6'>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to="/privacy-policy"  className="dark-blue">
                                        <AiFillFileText className="footer-icon mx-1"/>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' sm='6'>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to="/terms-and-conditions"  className="dark-blue">
                                        <AiFillFileText className="footer-icon mx-1"/>
                                        Terms And Conditions
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' sm='6'>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to="/cookie-policy"  className="dark-blue">
                                        <AiFillFileText className="footer-icon mx-1"/>
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' sm='6' className=''>
                            <div id="">
                                <form
                                    action="https://niuq.us18.list-manage.com/subscribe/post?u=7803c7ebc6985c6280b3ccba1&amp;id=9703469581"
                                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                    className="validate" target="_blank" noValidate>
                                    <div id="mc_embed_signup_scroll" className="d-inline">
                                        <div className="mc-field-group d-line input-group">
                                            <input type="email" name="EMAIL" className="required email form-control mx-2"
                                                   id="mce-EMAIL"/>
                                            <button type="submit" name="subscribe"
                                                    id="mc-embedded-subscribe" className="btn btn-darkBlue">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>

                <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <Link to="/" className='text-dark'>
                        Niqu.io All Rights Reserved
                    </Link>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;
