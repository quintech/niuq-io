import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TitleText from "../../components/title";
import { Container, Row } from "react-bootstrap";
import NewsSearch from "../../components/news-search";
import MostPopular from "./most-popular";
import { newsList } from '../../share/environment/variable/inxdex';
import OtherNews from "./other-news";
import LatestNews from "./latest-news";

// Set the timer as a shared variable to be cleared when leaving, otherwise there may be memory leaks
let intervalId;

class NewsCenter extends Component {

    // Reload every two seconds
    componentDidMount() {
        intervalId = window.setInterval(() => {
            // If the update button is pressed
            if (newsList.update) {
                this.forceUpdate();
                this.setState = () => false;
                window.clearInterval(intervalId);
            }
        }, 2000);
    }

    // Handle when the component is unmounted
    componentWillUnmount() {
        window.clearInterval(intervalId);
    }

    constructor(props) {
        super(props);
        newsList.otherNewsList = true;
    }

    render() {
        return (
            <Container className="mb-5">
                <Row>
                    {/* Fill in the text parameter to automatically display the Title */}
                    <TitleText text="NEWS TODAY" />
                    {/* Shared news search block */}
                    <NewsSearch />
                    <TitleText text="MOST POPULAR" />
                    <MostPopular />
                    <TitleText text="OTHER NEWS" />
                    <OtherNews />
                    <TitleText text="LATEST NEWS" />
                    <LatestNews />
                </Row>
            </Container>
        );
    }
}

export default NewsCenter;
