import {React,useEffect} from "react";
import {googleSignInConfig} from "../../share/environment/config/google-sign-in-config";
import {googleSignIn, googleSignInError} from "../../components/login/sign-in";
import GoogleOneTapLogin from 'react-google-one-tap-login';

import googleSignInIcon from '../../public/images/google/btn_google_signin_light_normal_web@2x.png';

function toShowGoogleLogin(params) {
        google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                document.cookie =  `g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
                google.accounts.id.prompt()
            }
        });
};
export const GoogleSignIn = () => {

    return (
        <div className="text-center">
            <img onClick={toShowGoogleLogin} src={googleSignInIcon} className="google-icon"/>
            <GoogleOneTapLogin
                        disabled={false}
                        onError={googleSignInError}
                        onSuccess={googleSignIn}
                        googleAccountConfigs={{ client_id: googleSignInConfig.client_id}}
                    />
        </div>
    );
}