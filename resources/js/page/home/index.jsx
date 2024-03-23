import { Col, Container, Row } from "react-bootstrap";
import NewsSearch from "../../components/news-search";
import TitleText from "../../components/title";
import factmataLogo from "../../../../public/images/Content Score.png";
import adfontesmedia from "../../../../public/images/Ad_Fontes_Media_logo.png";
import mediabiasfactcheck from "../../../../public/images/MediaBias-FactCheck.png";
import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('Home init props');
        console.log(props);
    }

    // Executed after the component is rendered
    componentDidMount() {}

    render() {
        return (
            <Container className="mb-5">
                <Row>
                    <TitleText text="" />
                    {/* Shared news search component */}
                    <NewsSearch />
                    <TitleText text="Validation Services" />
                    <Col xs={12} sm={6} md={4} lg={4} className="text-center my-2">
                        <div className="">
                            <img src={adfontesmedia} style={{ width: '200px' }} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4} className="text-center my-2">
                        <div className="">
                            <img src={mediabiasfactcheck} style={{ width: '200px' }} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4} className="text-center my-2">
                        <a className="" href="https://contentscore-ai.com/" target="_blank" rel="noopener noreferrer">
                            <img src={factmataLogo} style={{ width: '200px' }} alt="" />
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
