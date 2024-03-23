// Create Google account
import {api} from "../../environment/config/config";

// Create account
export function signInWithGoogle(props) {
    return fetch(api.signInWithGoogle.url, {
        method: api.signInWithGoogle.method,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        },
        body: props,
    })
}

// Edit personal information
export function userEditProfile(props){
    return api.userEditProfile(props);
}

