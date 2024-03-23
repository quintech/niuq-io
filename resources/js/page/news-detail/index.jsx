import React, { Component, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import DetailText from './detail-text';

import { api } from '../../share/environment/config/config';
import { _setNews } from '../../share/service/news';

export default function NewsDetail(props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const [newsID, changeNewsID] = useState("");

    useEffect(() => {

        changeNewsID(searchParams.get("newsID"));

        if(searchParams.get("newsID") != ''){
            api.new({'newid':searchParams.get("newsID")}).then((r)=>{
                if (r.ERROR === 'undefined' || r.message === '透過UUID取得新聞成功!') {
                    _setNews('ADD_NEW_DETAIL',{ itemNews: r.new })
                    
                } else {
                    //如果遇到API回傳錯誤
                    Message.errorMessage = 'Connect Server Error, ' + r.message;
                }
            }).catch((err)=>{
                console.error(e);
                Message.errorMessage = e.message;
            })
        }
    },[]);

    useSelector((state) =>{
    });

    return (
        <Container className="mb-5">
            <Row>
                <DetailText/>
            </Row>
        </Container>
    );
}
