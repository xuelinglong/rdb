import { combineReducers } from 'redux'
import * as type from '../actions/type'

const initialState = {
  title: '首页',
  tab: 'topics'
}

const changeTab = (state = initialState, action)=> {
  switch(action.type) {
    case type.CHANGE_TAB:
      // {}是保证不直接修改state,新建一个副本并把源对象复制到state中。
      return Object.assign({}, state, {
        tab: action.tab,
        title: action.title
      })
    // default的情况下返回旧的state
    default:
      return state;
  }
}

const common = combineReducers({
  changeTab
});

export default common;
