//API Server IP

import { toast } from 'react-toastify';

//Fixed URL
export const baseURL = {
    apiServer: "https://webapi.niuq.io/", //Production API server
    // apiServer: "http://local.angular/", //Testing API server
}

//api
export const api = {
    //Get requester IP
    getIP: { url: baseURL.apiServer + "api/getip", method: "GET" },
    //Get all news HTML
    verifyNews: { url: baseURL.apiServer + "api/verifynews", method: "GET" },
    //Save news data to the database
    store: { url: baseURL.apiServer + "api/store", method: "POST" },
    //Retrieve all news data from the database
    allNews: { url: baseURL.apiServer + "api/allnews", method: "GET" },
    //Retrieve popular news data from the database
    mostPopularNews: (param) => { return GetFetch(baseURL.apiServer + "api/getMostPopularNews", param) },
    //Retrieve perigon data
    getLatestNews: (param) => { return GetFetch(baseURL.apiServer + "api/getLatestNews", param) },
    //Retrieve specific news data from the database
    new: (param) => { return GetFetch(baseURL.apiServer + "api/new", param) },
    //Retrieve UUID of API NODATA data from the database
    getNoDataUUID: { url: baseURL.apiServer + "api/getNoDataUUID", method: "GET" },
    //Retrieve the first API data
    getAdFontesMedia: { url: baseURL.apiServer + "api/getAdFontesMedia", method: "GET" },
    //Retrieve the second API data
    getMediaBiasFackCheck: { url: baseURL.apiServer + "api/getMediaBiasFackCheck", method: "GET" },
    //Retrieve the third API data
    getFactMata: { url: baseURL.apiServer + "api/getFactMata", method: "GET" },
    //Sign in with Google account
    signInWithGoogle: { url: baseURL.apiServer + "api/signInWithGoogle", method: "POST" },
    //Get Google user account data stored in the database
    getGoogleAccountData: (param) => { return GetFetch(baseURL.apiServer + "api/getGoogleUserRegistered", param) },
    //Edit user profile data
    userEditProfile: (param) => { return PostFetch(baseURL.apiServer + "api/userEditProfile", param, true) },
    //Send tokens to the user
    giveNiuq: (param) => { return PostFetch(baseURL.apiServer + "api/giveUserNiuq", param, true) },
    //Get transaction history
    getTransactionHistory: (param) => { return GetFetch(baseURL.apiServer + "api/getUserTransaction", param) },

    //Register
    userRegister: (param) => { return PostFetch(baseURL.apiServer + "api/register", param, true) },
    //Login
    userlogin: (param) => { return PostFetch(baseURL.apiServer + "api/login", param, true) },
    //Get user information
    getUser: (param) => { return GetFetch(baseURL.apiServer + "api/getUser", param) }
};


function GetFetch(url, param, showToast = false) {
    var body = (param) ? param : {};
    url = url + ObjToParam(body);
    return new Promise((resolve, reject) => {
        let header = GetOption();
        header['method'] = "GET";
        let toastID
        if (showToast) {
            toastID = toast.info("Verifying...", {
                position: toast.POSITION.TOP_RIGHT,
                isLoading: true
            });
        }

        fetch(url, header)
            .then(res => res.json()) /*Convert request to JSON*/
            .then(data => {
                if (showToast) {
                    toast.done(toastID);
                    ShowToast(data);
                }
                resolve(data);
            })
            .catch(err => {
                console.log('Err-Fetch');
                console.log(err);
                toast.error('Server encountered an exception');
                if (showToast) {
                    toast.done(toastID)
                }
                reject(err);
            })
    })
}

function PostFetch(url, param, showToast = false) {
    return new Promise((resolve, reject) => {
        let header = GetOption();
        header['method'] = "POST";
        header['body'] = param;
        let toastID
        if (showToast) {
            toastID = toast.info("Verifying...", {
                position: toast.POSITION.TOP_RIGHT,
                isLoading: true
            });
        }

        fetch(url, header)
            .then(res => res.json()) /*Convert request to JSON*/
            .then(data => {
                if (showToast) {
                    toast.done(toastID)
                    ShowToast(data)
                }
                resolve(data);
            })
            .catch(err => {
                console.log('Err-Fetch');
                console.log(err)
                toast.error('Server encountered an exception')
                if (showToast) {
                    toast.done(toastID)
                }
                reject(err)
            })
    })
}

function GetOption() {
    let headers = {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
    };
    let token = localStorage.getItem('token');
    if (token != null) {
        headers.Authorization = 'Bearer ' + token;
    }
    return {
        headers
    }
}

function ShowToast(data) {
    data['success'] ?
        toast.success(data['message']) :
        toast.error(data['message'])
}

function ObjToParam(object) {
    var param = '?';
    if (typeof object == 'object') {
        var keys = Object.keys(object);
        for (var i = 0; i < keys.length; i++) {
            if (i > 0) {
                //Special Rule
                var _v = object[keys[i]].toString();;
                var v = _v.split(',');
                if (v.length == 1) {
                    param = param + '&' + keys[i] + '=' + object[keys[i]];
                } else {
                    for (var j = 0; j < v.length; j++) {
                        param = param + '&' + keys[i] + '=' + v[j];
                    }
                }
            } else {
                //Special Rule
                var _v = object[keys[i]].toString();;
                var v = _v.split(',');
                if (v.length == 1) {
                    param = param + keys[i] + '=' + object[keys[i]];
                } else {
                    for (j = 0; j < v.length; j++) {
                        if (j == 0) {
                            param = param + keys[i] + '=' + v[j];
                        } else {
                            param = param + '&' + keys[i] + '=' + v[j];
                        }

                    }
                }
            }
        }
    }
    param = (param == '?') ? '' : param;
    return param;
}