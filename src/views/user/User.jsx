import React, { Component } from 'react';
import { apis, actions } from './../../redux/request.js';
import './User.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accesstoken: "af0a22ca-d49f-47ec-afef-51b9cabf4c3c",
      loginData: {},
      userInfo: {},
      success: false
    }
  }

  login() {
    var params = {
      accesstoken: this.state.accesstoken
    }
    actions.post(apis.login.url, params, (data) => {
      if(data) {
        this.setState({
          loginData: data
        }, () => {
          // 登陆成功获取用户信息
          this.getUserInfo();
          this.setState({
            success: true
          })
        });
      }
    })
  }

  getUserInfo() {
    var params = {
      loginname: this.state.loginData.loginname
    }
    actions.get(apis.userInfo.url + this.state.loginData.loginname, params, (data) => {
      if(data) {
        this.setState({
          userInfo: data
        })
      }
    })
  }

  loginOut() {
    this.setState({
      loginData: {},
      success: false
    })
  }

  render() {
    return (
      <div className="user">
      {
         !this.state.success ?
         <div>
          <div className="accesstoken">
            token: 
            <input type="text" className="accesstoken-input" placeholder={ this.state.accesstoken }/>
          </div>
          <button className="login" onClick={ this.login.bind(this) }>登陆</button>
          </div> : <div>
            <div className="User-author-image">
              <img className="User-image" src={ this.state.loginData.avatar_url} alt="usr" /><br/>
              <span className="User-loginname">{ this.state.loginData.loginname }</span>
            </div>
            <div className="User-list">
              <div className="User-listItem">我收藏的话题
                <span className="link"> > </span>
                <span className="bradge">5</span>
              </div>
              <div className="User-listItem">我参与的话题
                <span className="link"> > </span>
                <span className="bradge">5</span>
              </div>
              <div className="User-listItem">我最近的话题
                <span className="link"> > </span>
                <span className="bradge">5</span>
              </div>
            </div>
            <button className="loginOut" onClick={ this.loginOut.bind(this) }>退出登陆</button>
          </div>
        } 
      </div>
    )
  }
}
