import { setUserLoginStatus } from '../../modal/redux/actions/actions';
import {api} from "../../environment/config/config";
import {store} from '../../modal/redux/store'

export function login(props) {
    let formData = new FormData();
    formData.append('account', props.account);
    formData.append('password', props.password);
    api.userlogin(formData)
    .then(res => {
        if(res.success){
            let userData = {
                'userAccessToken': res.userAccessToken,
                'userGoogleID': res.userGoogleID,
                'userImg': res.userImg,
                'userEmail': res.userEmail,
                'userName': res.userName,
                'useTime': res.useTime,
            };
            localStorage.setItem('token',res?.access_token)
            localStorage.setItem('userData', JSON.stringify(userData))
            _setUserLoginStatus(true);
        }else{
            _setUserLoginStatus(false);
        }
    }).catch(error => {
        console.log(error);
    });
}

export const _setUserLoginStatus = (isLogin) => {
    store.dispatch(setUserLoginStatus(isLogin));
}