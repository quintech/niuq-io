import { _setUserLoginStatus } from '../../../share/service/account/login';
import { api } from "../../../share/environment/config/config";

/**
 *  給予指定的key就會回傳Google登入資料，並且需要去驗證是否憑證過期有過期會自動重新獲取或是要求重新登入 
 *  @returns {Promise}
 */
export const checkLogin = new Promise((resolve,reject)=>{

    api.getUser().then(res => {
        _setUserLoginStatus(userDataCheck());
        userDataCheck() ? resolve(true) : reject(false)
    }).catch(err => {
        _setUserLoginStatus(userDataCheck());
        userDataCheck() ? resolve(true) : reject(false)
    });
});

/**
 *  利用是否有userData確認登入狀況。
 * （TODO：將google帳號綁入，網站帳號。把登入功能收束成只能依靠網站帳號。）
 * @returns {boolean}
 */
const userDataCheck = () => {
    let getAllData = localStorage.getItem('userData');

    if (getAllData === null || getAllData === undefined){
        return false;
    }else {
        let jsonData = JSON.parse(getAllData); //轉Json
        let nowTime  = new Date();
        //如果現在時間已經大於的話就代表你超過一天了必須重新登入一次帳戶
        if (nowTime.getTime() > jsonData.useTime){
            localStorage.removeItem('userData');
            localStorage.removeItem('token');
            return false;
        }else{
            return true;
        }
    }
}

//給NAV取得使用者資料用
export const getUserData = (userData) =>{
    let getAllData = localStorage.getItem(userData);
    return JSON.parse(getAllData);
}

//取得快取使用者資料
export const getCacheUserData = (userData) => {
    let getAllData = sessionStorage.getItem(userData);
    return JSON.parse(getAllData);
}
