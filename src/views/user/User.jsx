import React, { Component } from 'react';
import './User.css';
import PublicHeader from './../../components/header/Header';
import PublicTabbar from './../../components/tabbar/Tabbar';
import { connect } from 'react-redux';
import { login, logOut, fetchUserInfo } from './../../redux/actions/user.js';

class User extends Component {
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
    let self = this;
    this.props.login(this.props.accesstoken,(loginname)=>{
      self.props.fetchUserInfo(loginname)
    });
  }

  loginOut() {
    this.props.logOut();
  }

  render() {
    return (
      <div>
        <PublicHeader />
        <div className="user">
        {
          !this.props.success ?
          <div>
            <div className="accesstoken">
              token: 
              <input type="text" className="accesstoken-input" placeholder={ this.state.accesstoken }/>
            </div>
            <button className="login" onClick={ this.login.bind(this) }>登陆</button>
            </div> : <div>
              <div className="User-author-image">
                <img className="User-image" src={ this.props.userData.avatar_url} alt="usr" /><br/>
                <span className="User-loginname">{ this.props.userData.loginname }</span>
              </div>
              <div className="User-list">
                <div className="User-listItem">我收藏的话题
                  <span className="link"> > </span>
                  <span className="bradge"></span>
                </div>
                <div className="User-listItem">我参与的话题
                  <span className="link"> > </span>
                  <span className="bradge"></span>
                </div>
                <div className="User-listItem">我最近的话题
                  <span className="link"> > </span>
                  <span className="bradge"></span>
                </div>
              </div>
              <button className="loginOut" onClick={ this.loginOut.bind(this) }>退出登陆</button>
            </div>
          } 
        </div>
        <PublicTabbar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  success: state.user.success,
  accesstoken: state.user.accesstoken,
  userData: state.user.userData
})

export default connect(mapStateToProps, { login, logOut, fetchUserInfo })(User);
