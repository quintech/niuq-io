import React, {Component} from "react";
import {Layout} from "antd";
import Navbar from "../../components/navbar";
import {Container, Row} from "react-bootstrap";
import Footer from "../../components/footer";
import TitleText from "../../components/title";

const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 81.2344px)'
};

class About extends Component{
    render() {
        return (
            <Container className="my-4 flex-fill">
                <Row>
                    <TitleText text="About US"/>
                    <p className="h5">
                        Our mission is to reduce the negative impact created by disinformation. To carry out the mission we start with building this platform to democratize factcheck services in a scalable way. By using the platform, users don't rely on single source of truth and can access multiple validation services to get their validation results and make their judgement to share the news with confidence!
                        The project is at its early stage and we welcome your feedback and support.
                    </p>
                </Row>
            </Container>
        );
    }
}

export default About;
