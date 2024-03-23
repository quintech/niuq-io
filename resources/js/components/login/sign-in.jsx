//Google登入區塊處理控制

import {getCacheUserData} from "./check-login/check-login";
//Google登入失敗
// console.log(process.env.APP_KEY)
import {getGoogleAccountData} from "../../share/service/login/get-account-data";

let responseMessage = "";
export const googleSignInError = (result) => {
    console.log(result)
    responseMessage = result.error
    let errorMessage = document.getElementById('google-sing-in-error-message');
    errorMessage.innerText = "Login error message :" +  responseMessage;
}

//Google登入成功
export const googleSignIn = (googleData) => {
    const now = new Date()

    let userAccessToken = googleData.jti;
    let userGoogleID = googleData.sub;
    let userImg = googleData.picture;
    let userEmail = googleData.email;
    let userName = googleData.name;
    let useTime = now.getTime() + 86400000;
    let userData = { 'userAccessToken': userAccessToken, 'userGoogleID': userGoogleID, 'userImg': userImg , 'userEmail':userEmail , 'userName':userName,'useTime':useTime};

    // Put the object into storage
    //先暫時存放,避免註冊未完成就跳離開
    sessionStorage.setItem('userData',JSON.stringify(userData));

    getGoogleAccountData(userGoogleID).then( (response) => {
        //沒有創建過資料
        if (response.data === "NODATA"){
            //先引導到補齊資料畫面才能發送資料到資料庫
            window.location.href = '/Login/With-Google';
        }else if (response.data.registered === 1){
            //有填寫過資料
            sessionStorage.clear(); //清除快取
            localStorage.setItem('userData', JSON.stringify(userData)) //設置使用者資料
            window.location.href = '/NewsCenter';
        }else if (response.data.registered === 0){
            //沒填寫過資料
            window.location.href = '/Login/With-Google';
        }else {
            //其他狀況
            window.location.href = '/NewsCenter';
        }
    }).catch((e)=>{
        console.log(e)
    })
}

