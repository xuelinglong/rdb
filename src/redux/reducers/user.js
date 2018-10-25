// import { combineReducers } from 'redux'
import * as type from '../actions/type'

const initialState = {
  accesstoken: 'af0a22ca-d49f-47ec-afef-51b9cabf4c3c',
  success: false,
  userData: {
    avatar_url: '',
    loginname: '',
    id: '',
    success: false
  },
  userInfo: {},
  hasReadMessages: [],
  hasnotReadMessages: []
}

const user = (state = initialState, action)=> {
  switch(action.type) {
    case type.LOGIN:
      // {}是保证不直接修改state,新建一个副本并把源对象复制到state中。
      return Object.assign({}, state, {
        userData: action.userData,
        success: action.success
      })
    case type.LOGOUT:
      return Object.assign({}, state, {
        userData: action.userData,
        success: action.success
      })
    case type.FETCH_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.userInfo
      })
    case type.FETCH_MSG:
      return Object.assign({}, state, {
        hasnotReadMessages: action.hasnotReadMessages,
        hasReadMessages: action.hasReadMessages
      })
    // default的情况下返回旧的state
    default:
      return state;
  }
}

// const user = combineReducers({
//   login
// });

export default user;
