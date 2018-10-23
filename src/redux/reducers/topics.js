import * as type from '../actions/type'

const initialState = {
  page: 0,
  limit: 20,
  topicsList: [],
  topicObj: {}
}

const topics = (state = initialState, action)=> {
  switch(action.type) {
    case type.FETCH_TOPICS:
      return Object.assign({}, state, {
        topicsList: action.topicsList,
        page: action.page
      })
    case type.FETCH_TOPIC_DETAIL:
      return Object.assign({}, state, {
        topicObj: action.topicObj,
      })
    default:
      return state;
  }
}

export default topics;
