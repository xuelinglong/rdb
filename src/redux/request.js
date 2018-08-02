import axios from 'axios';
axios.defaults.baseURL = 'https://cnodejs.org/api/v1/';

export const apis = {
  // 获取主题列表
  getTopics: {
    url: axios.defaults.baseURL + 'topics'
  }
}

export const actions = {
  get:(url, params, cb) => {
    axios.get(url, params).then(res => {
      let DATA = res.data.data;
      cb && cb(DATA);
    })
  },
  post:(url, params, cb) => {
    axios.post(url, {params}).then(res => {
      let DATA = res.data;
      cb && cb(DATA);
    })
  }
}
