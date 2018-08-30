import { combineReducers } from 'redux'
import * as type from './actions/type'

const changeTitle = (state = {}, action)=> {
  switch(action.type) {
    case type.CHANGE_TITLE:
      // {}是保证不直接修改state,新建一个副本并把源对象复制到state中。
      return Object.assign({}, state, {
        title: action.title
      })
    // default的情况下返回旧的state
    default:
      return state;
  }
}

const common = combineReducers({
  changeTitle
});

export default common;
