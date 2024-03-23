// actions.js

/*
 * action type
 */
export const SET_USER_LOGIN_STATUS = 'SET_USER_LOGIN_STATUS';

/*
 * Other constants
 */
export const type = {
    SET_USER_LOGIN_STATUS : 'SET_USER_LOGIN_STATUS',
  };

/*
 * action creator
 */
export const setUserLoginStatus = (isLogin) => {
  return {
    type: SET_USER_LOGIN_STATUS,
    isLogin: isLogin,
  }
};

export const setNews = (type,add) => {
  return {
    type: type,
    add: add,
  }
};