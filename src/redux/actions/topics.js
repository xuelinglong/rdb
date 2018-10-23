import * as type from './type'
import { apis, actions } from './../request.js';

export const fetchTopics = (params,page) => dispatch => {
  actions.get(apis.getTopics.url, params, (data)=>{
    if(data){
      dispatch ({
        type: type.FETCH_TOPICS,
        topicsList: data,
        page: page+1
      })
    }
  })
}

export const fetchTopicDetail = (id,params) => dispatch => {
  actions.get(apis.getTopicDetail.url + id, params,(data)=>{
    if(data){
      dispatch ({
        type: type.FETCH_TOPIC_DETAIL,
        topicObj: data,
      })
    }
  })
}
