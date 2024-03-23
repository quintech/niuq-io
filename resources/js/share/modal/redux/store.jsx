import { combineReducers } from 'redux';
import {itemReducer} from "./reducer";
import {setUserLoginStatus} from "./reducer/isLoginReducer";
import {createStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    itemReducer,
    setUserLoginStatus,
    // 其他Reducer...
  });

const store = createStore(rootReducer);

export {store};
