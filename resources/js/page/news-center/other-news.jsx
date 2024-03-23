import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import ShareButton from "../../components/share-button";
import { Link } from "react-router-dom";
import { errorMessage } from "../../components/error-message";
import GetAllNews from "../../components/news-search/get-all-news";

function computeScoreAverage(reliability, factualReporting, fakeness) {
    let computeScoreNumber = 3;

    if (reliability === 0) {
        computeScoreNumber -= 1;
    } else {
        reliability /= 6.4;
    }

    if (factualReporting === 0) {
        computeScoreNumber -= 1;
    }

    if (fakeness === 0) {
        computeScoreNumber -= 1;
    } else {
        fakeness = parseFloat((1 - fakeness) * 10); //float
    }

    let score =
        (parseFloat(reliability) +
            parseFloat(factualReporting) +
            parseFloat(fakeness)) /
        parseFloat(computeScoreNumber);

    if (score >= 6.55) {
        return "d-flex ms-2 fractionCircleNotStandard bg-safe";
    } else if (score >= 3.1) {
        return "d-flex ms-2 fractionCircleNotStandard bg-amber";
    } else if (score < 3.1) {
        return "d-flex ms-2 fractionCircleNotStandard bg-danger";
    } else {
        return "d-flex ms-2 fractionCircleNotStandard bg-notStandard";
    }
}

const OtherNews = () => {
    const count = useSelector((state) => ({
        data: state,
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage, setTodosPerPage] = useState(16);
    const lastTodoInView = currentPage * todosPerPage;
    const firstTodoInView = lastTodoInView - todosPerPage;

    const calculatePage = (number, pageNumbers) => {
        if (number === 0) {
            if (currentPage - 1 === 0) {
                setCurrentPage(pageNumbers);
            } else {
                setCurrentPage(currentPage - 1);
            }
        } else if (number === 1) {
            if (currentPage + 1 > pageNumbers) {
                setCurrentPage(1);
            } else {
                setCurrentPage(currentPage + 1);
            }
        } else {
        }
    };

    const RenderPageNumbersStyle = (props) => {
        try {
            if (props?.props?.data?.itemReducer.otherNews.length !== 0) {
                const pageNumbers = [];
                for (
                    let n = 1;
                    n <=
                    Math.ceil(
                        props.props.data.itemReducer.otherNews[0].length / todosPerPage
                    );
                    n++
                ) {
                    pageNumbers.push(n);
                }
                return (
                    <div className="d-flex">
                        <div className="mx-auto">
                            <button
                                className="btn btn-previous-page h1 mx-2"
                                onClick={() => calculatePage(0, pageNumbers.length)}
                            >
                                ‹
                            </button>
                            <div className="btn btn-darkBlue mx-2">{currentPage}</div>
                            <button
                                className="btn btn-next-page h1 mx-2"
                                onClick={() => calculatePage(1, pageNumbers.length)}
                            >
                                ›
                            </button>
                        </div>
                    </div>
                );
            } else {
                return "";
            }
        } catch (e) {
            return errorMessage(e.message);
        }
    };

    const CardView = (props) => {
        try {
            if (props?.props?.data?.itemReducer.otherNews.length !== 0) {
                const todosForDisplay = props.props.data.itemReducer.otherNews[0].slice(
                    firstTodoInView,
                    lastTodoInView
                );

                return (
                    <Row>
                        {todosForDisplay.map((card, index) => (
                            <Col xs={12} sm={12} md={6} lg={4} xl={3} key={card.uuid}>
                                <Card className="mb-3">
                                    <Card.Header className="cardHeader">
                                        <ShareButton card={card} />
                                    </Card.Header>
                                    <Card.Body>
                                        <Link
                                            to={{
                                                pathname: "/NewsDetail",
                                                search: "?newsID=" + card.uuid,
                                            }}
                                        >
                                            <Card.Title>
                                                <div className="text-dark">{card.title}</div>
                                            </Card.Title>
                                            <section className="text-dark d-flex align-items-center justify-content-end">
                                                <section
                                                    className={computeScoreAverage(
                                                        card.reliability,
                                                        card.factual_reporting,
                                                        card.fakeness
                                                    )}
                                                ></section>
                                            </section>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                );
            } else {
                return (
                    <Row className="justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Row>
                );
            }
        } catch (e) {
            return errorMessage(e.message);
        }
    };

    return (
        <div className="">
            <GetAllNews />
            <CardView props={count} />
            <RenderPageNumbersStyle props={count} />
        </div>
    );
};

export default OtherNews;
