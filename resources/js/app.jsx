import {render} from "react-dom";
import React from 'react';
import React_Routes from "../js/react-routes";
import {Provider} from "react-redux";
import {store} from "./share/modal/redux/store";

import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');

render(
    <Provider store={store}>
        <ToastContainer />
        <React.StrictMode>
            <React_Routes />
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')


);




