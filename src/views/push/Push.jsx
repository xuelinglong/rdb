import React, { Component } from 'react';
import './Push.css';
import PublicHeader from './../../components/header/Header';
import PublicTabbar from './../../components/tabbar/Tabbar';
import { connect } from 'react-redux';
import { changeTab } from './../../redux/actions/common.js';
import { fetchMsg } from './../../redux/actions/user.js';
import LogoImg from './../../images/logo.jpg';

class Push extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accesstoken: "af0a22ca-d49f-47ec-afef-51b9cabf4c3c",
      success: false
    }
  }

  trapToLogin() {
    this.props.changeTab('user','我的');
    this.props.history.push('/user');
  }

  render() {
    return (
      <div>
        <PublicHeader />
        {!this.props.success && <div className="message">
          <img className="logoImg" src={LogoImg} alt="logo"/>
          <button className="trapToLogin" onClick={() => this.trapToLogin()}>去登录</button>
        </div>}
        {this.props.success && <div className="message">
          111
        </div>}
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

export default connect(mapStateToProps, { fetchMsg, changeTab })(Push);
