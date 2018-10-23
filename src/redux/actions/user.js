import * as type from './type'
import { apis, actions } from './../request.js';

export const login = (accesstoken,cb) => dispatch => {
  actions.post(apis.login.url,{accesstoken:accesstoken},(data)=>{
    if(data.success){
      dispatch ({
        type: type.LOGIN,
        userData: data,
        success: data.success
      })
      cb&&cb(data.loginname);
    }
  })
}

export const logOut = () => dispatch => {
  dispatch ({
    type: type.LOGOUT,
    userData: {
      avatar_url: '',
      loginname: '',
      id: '',
      success: false
    },
    success: false
  })
}

export const fetchUserInfo = (loginname) => dispatch => {
  actions.get(apis.userInfo.url+loginname,{loginname:loginname},(data)=>{
    if(data){
      dispatch ({
        type: type.FETCH_USER_INFO,
        userInfo: data,
      })
    }
  })
}
