// Get the returned value from the first API
import { api } from "../../../environment/config/config";
import { _setNews } from "../../news";

export function getMostPopularNews() {
    return api.mostPopularNews().then((res)=>{
        let mostPopularNewsArray = res.slice(0, 4);
        _setNews('ADD_MOST_POPULAR',{
            mostPopular: mostPopularNewsArray
        })
    }).catch(e => {
        return errorMessage(e.message);
    })
}

export function getLatestNews() {
    return api.getLatestNews().then((res)=>{
        let latestNewsArray = res.data;
        _setNews('ADD_LATEST_NEWS',{
            latestNews: latestNewsArray
        })
    }).catch(e => {
        return errorMessage(e.message);
    })
}
