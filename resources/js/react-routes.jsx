import React, { useEffect, useState } from "react";
import AppComponent from "./share/appComponent";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { getIp } from "./share/service/api/get-ip/get-ip";

import UserSetting from "./page/user-setting";
import NewsCenter from "./page/news-center";
import NewsDetail from "./page/news-detail";
import Home from "./page/home/index";
import About from "./page/about";
import Login from "./page/login";
import PrivacyPolicy from "./page/privacy-policy";
import TermsAndConditions from "./page/terms-and-conditions";
import CookiePolicy from "./page/cookie-policy";
import GoogleSupplementaryInformation from "./page/login/google-supplementary-information";

// This is what happens every time the route changes
const ReactRoutesLocation = () => {
    const location = useLocation();
    useEffect(() => {

    }, [location]);

    //...

    return '';
};

const React_Routes = () => {
    let ip = null;
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    useEffect(() => {
        onLoad();
    }, []);

    function onLoad() {
        console.log('route onLoad');
        try {

            const ipAddresses = [
                '180.217.19.178',
                '106.104.165.127',
                '192.168.2.101',
                '114.44.185.204',
                '114.44.184.78',
                '1.200.13.137',
                '140.131.39.253',
                '114.36.168.120',
                '172.68.118.73',
                '162.158.178.19',
                '162.158.178.206',
                '20.150.142.27',
                '127.0.0.1',
                // '123.252.122.9',
            ];
            // Handling IP issues
            // The new way to get the IP is through your own API server to verify the IP address
            try {
                getIp().then(response => {
                    response.json().then(r => {
                        ip = r.ip;
                        let ipTip = document.getElementById('main_title_ipTip');
                        // Display whether the IP verification has passed or not
                        let ip_check_tip = document.getElementById('ip_check_tip');
                        // let ip_check_tip_tw = document.getElementById('ip_check_tip_tw');
                        if (ipTip !== null) {
                            ipTip.innerText = "IP: " + ip + "!";
                            ip_check_tip.innerText = 'Please turn on the VPN or confirm whether your IP is in the list. If you think there is something wrong, please contact the developer!';
                            // ip_check_tip_tw.innerText = 'Please turn on the VPN or confirm whether your IP is in the list. If you think there is something wrong, please contact the developer!';
                        }
                        ipAddresses.forEach(ipAddress => {
                            // Verify IP location
                            if (ip === ipAddress) {
                                if (ipTip !== null) {
                                    // If it passes, display verification passed
                                    ip_check_tip.innerText = 'IP verification passed.';
                                    // ip_check_tip_tw.innerText = 'IP 驗證通過';
                                }
                                userHasAuthenticated(true);
                            } else {

                            }
                        });
                    });
                }).catch(

                );
            } catch (e) {
                console.error(e);
            }
        } catch (e) {
            alert(e);
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppComponent />}>

                    {/* Content section */}
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/NewsCenter" element={<NewsCenter />} />
                    <Route path="/NewsDetail" element={<NewsDetail />} />
                    <Route path="/UserSettings/EditProfile" element={<UserSetting />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/Login/With-Google" element={<GoogleSupplementaryInformation />} />
                </Route>
                {/* <Route path="*" render={() => <Redirect to="/" />} /> */}
            </Routes>
            <ReactRoutesLocation />
        </BrowserRouter>
    );
};
export default React_Routes;
