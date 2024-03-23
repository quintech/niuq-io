import React from 'react';
import { useDispatch } from 'react-redux';
import { newsList } from '../../share/environment/variable/inxdex';
import { api } from '../../share/environment/config/config';
import { Message } from '../../share/environment/message';

const GetNew = (props) => {
    //這是新增資料進去Redux
    const dispatch = useDispatch();
    if (newsList.getNew) {
        newsList.getNew = false;
        try {
            fetch(api.new.url + `?newid=${props.uuid}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                },
            }).then(res => {
                res.json().then(r => {
                    if (r.ERROR === 'undefined' || r.message === '透過UUID取得新聞成功!') {
                        dispatch({
                            type: 'ADD_NEW_DETAIL',
                            add: { itemNews: r.new }
                        });
                    } else {
                        //如果遇到API回傳錯誤
                        Message.errorMessage = 'Connect Server Error, ' + r.message;
                    }
                });
            });
        } catch (e) {
            console.error(e);
            Message.errorMessage = e.message;
        }
    }
    return "";
};
export default GetNew;
