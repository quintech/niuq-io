

const initialState = {
  isLogin: false
}
// Set user login status
export function setUserLoginStatus(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER_LOGIN_STATUS':
          return Object.assign({}, state, {
            isLogin: action.isLogin
          })
        default:
          return state
    }
}
