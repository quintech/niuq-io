import { useDispatch, useSelector } from 'react-redux';
import { newsList } from '../../share/environment/variable/inxdex';
import { api } from '../../share/environment/config/config';

//這個是讓他自己去打一次獲取所有新聞的API並且將它記錄到redux
const GetAllNews = () => {
    //這是新增資料進去Redux
    const dispatch = useDispatch();

    //他只能執行一次
    if (newsList.otherNewsList){
        newsList.otherNewsList = false;
        try {
            fetch(api.allNews.url, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                },
            }).then(res => {
                res.json().then(r => {
                    dispatch({
                        type: "ADD_OTHER_NEWS",
                        add: {otherNews: r}
                    });
                })
            })
        } catch (e) {
            console.error(e);
        }
    }

    return (
        ""
    );
}
export default GetAllNews
