import React, {Component,useEffect} from 'react';
import {Card, Col, Row,Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {getLatestNews} from "../../share/service/api/new/news-api";
import ShareButton from '../../components/share-button';
import { useSelector } from 'react-redux';

function computeScoreAverage(reliability,factualReporting,fakeness){
    let computeScoreNumber = 3;

    if(reliability == 0){
        computeScoreNumber -= 1;
    }else{
        reliability /= 6.4;
    }

    if(factualReporting == 0){
        computeScoreNumber -= 1;
    }

    if(fakeness == 0){
        computeScoreNumber -=1;
    }else{
        fakeness = parseFloat((1-fakeness) * 10);//float
    }
    //console.log(fakeness);
    let score = 
        ( parseFloat(reliability)+ parseFloat(factualReporting)+ parseFloat(fakeness)) / parseFloat(computeScoreNumber) ;
    //console.log(score);
    
    if(score >=6.55){
        return "d-flex ms-2 fractionCircleNotStandard bg-safe";

    }else if(score >= 3.1){
        return "d-flex ms-2 fractionCircleNotStandard bg-amber";
    }else if(score < 3.1){
        return "d-flex ms-2 fractionCircleNotStandard bg-danger";
    }else{
        return "d-flex ms-2 fractionCircleNotStandard bg-notStandard";
    }

}

export default function LatestNews() {

    useEffect(() => {
        getLatestNews();
    }, []);

    let data = useSelector((state)=>state);

    if (data.itemReducer?.latestNews != undefined && data?.itemReducer?.latestNews?.length != 0) {
        return (
            <Row>
                {data?.itemReducer?.latestNews[0]?.map(card => (
                    <Col xs={12} sm={12} md={6} lg={4} xl={3} key={card.uuid}>
                        <Card className="mb-3">
                            {/*<div key={card.uuid}>{card.title}</div>*/}
                            <Card.Header className="cardHeader">
                                <ShareButton card={card}/>
                            </Card.Header>
                            <Card.Body>
                                <Link to={{
                                    pathname: '/NewsDetail',
                                    search: '?newsID=' + card.uuid,
                                }}>
                                    <Card.Title>
                                        <div className="text-dark">
                                            {card.title}
                                        </div>
                                    </Card.Title>
                                    <section className="text-dark d-flex align-items-center justify-content-end">
                                        <section className={computeScoreAverage( card.reliability, card.factual_reporting, card.fakeness)}></section>
                                    </section>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }else{
        return (
            <Row className='justify-content-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Row> 
        )
    }
}
