import { FormControl, InputGroup } from "react-bootstrap";

import { Button } from "antd";
import { Component,useState,useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from '../../share/environment/config/config';
import { newsList } from '../../share/environment/variable/inxdex';
import { mapStateToProps } from "../../share/modal/map/map";
import GetAllNews from './get-all-news';



export default function NewsSearch(props){
    const navigate = useNavigate();
    const [url, setUrl] = useState(null);
    const [update, setUpdate] = useState(false);
    // const [url, setUrl] = useState('');

    useEffect(() =>{
        console.log('newsSearch-props');
        console.log(props);
        // handleChange = this.handleChange.bind(this);
        // btnClick = this.btnClick.bind(this);
    })


    // HTML 元件使用 onChange 並套用上 handleChange function
    // 就可以在每次Input改變的時候將state改變
    function handleChange(e){
        setUrl(e.target.value);
    }

    //按下按鈕觸發
    function btnClick(e){
        //獲取所有HTML標籤
        fetch(api.verifyNews.url +`?url=${url}`, {
            headers: {
                'Content-Type':'application/json',
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
            },
        }).then((res)=>{
            console.log(res)
            formNewsData(res);
        }).catch((err)=>{
            console.log(err)   
        })
    }

    //驗證新聞是否為正確的公司
    function formNewsData(res){
        res.json().then(r => {
            console.log('formNewsData-r');
            console.log(r);
            let parser = new DOMParser();
            let doc = parser.parseFromString(r.htmlTag, "text/html");
            let formData = new FormData();
            console.log(doc)
            //新的搜尋新聞標題方式
            formData.append('title',doc.querySelector("title").innerText)

            //固定要寫入到資料庫的
            formData.append('url', url);
            getApiUUID(formData);
        }).catch((err)=>{
            console.log(err)   
        })
    }

    //獲取API預設NODATA UUID
    function getApiUUID(formData){
        fetch(api.getNoDataUUID.url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
            },
        }).then((res)=>{
            console.log(res)
            res.json().then(r => {
                //成功訊息
                formData.append('ad_fontes_media_uuid',r.AdFontesMediaUUID)
                formData.append('media_bias_fact_check_uuid',r.MediaBiasFactCheckUUID)
                formData.append('fact_mata_context','NODATA')
                saveNews(formData);
            })
        }).catch((err)=>{
            console.log(err)   
        })
    }

    //儲存新聞到資料庫
    function saveNews(formData){
        //儲存到資料庫的API
        fetch(api.store.url, {
            method: api.store.method,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
            },
            body: formData,
        }).then((res)=>{
            console.log(res)
            res.json().then(r => {
                //成功訊息
                navigate("/NewsDetail?newsID=" + r.newUUID)
                setUpdate({update: true})
                newsList.update = true;
            })
        }).catch((err)=>{
            console.log(err)   
        })
    };

    //畫面顯示
    return (
        <fieldset className="">
            <InputGroup className="">
                <FormControl
                    className="ms-5 newsSearchInput"
                    placeholder="NEWS URL HERE"
                    aria-label="NEWS URL HERE"
                    aria-describedby="newsSearchBtn"
                    onChange={handleChange}
                />
                <Button id="newsSearchBtn-addon2" className="me-5 newsSearchBtn btn" onClick={btnClick}>
                    Niuq it!
                </Button>
                {/*只要點擊過之後就讓他去讀取所有新聞*/}
                {update && <GetAllNews/>}
            </InputGroup>
        </fieldset>
    );
    
}
