import axios from 'axios';
axios.defaults.baseURL = 'https://cnodejs.org/api/v1/';

export const apis = {
  // 获取主题列表
  getTopics: {
    url: axios.defaults.baseURL + 'topics'
  },
  getTopicDetail: {
    url: axios.defaults.baseURL + 'topic/'
  },
  // 用户登录
  login: {
    url: axios.defaults.baseURL + 'accesstoken'
  },
  // 获取用户info
  userInfo: {
    url: axios.defaults.baseURL + 'user/'
  }
}

export const actions = {
  get:(url, params, cb) => {
    axios.get(url, {params: params}).then(res => {
      let DATA = res.data.data;
      cb && cb(DATA);
    })
  },
  post:(url, params, cb) => {
    axios.post(url, params).then(res => {
      let DATA = res.data;
      cb && cb(DATA);
    })
  }
}
