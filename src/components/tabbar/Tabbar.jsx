import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeTab } from './../../redux/actions/common.js';
import './Tabbar.css';

class PublicTabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'topics'
    }
  }

  changeSelected(tab, title) {
    this.props.changeTab(tab,title);
  }

  render() {
    return(
      <footer className="PublicTabbar">
        <NavLink className="TabbarItem" to="/">
          <div className={"TabbarItem " + (this.props.selected === 'topics' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'topics','首页')} >主题</div>
        </NavLink>
        <NavLink className="TabbarItem" to="/message">
          <div className={"TabbarItem " + (this.props.selected === 'message' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'message','消息')}>消息</div>
        </NavLink>
        <NavLink className="TabbarItem" to="/push">
          <div className={"TabbarItem " + (this.props.selected === 'push' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'push','发布')}>发布</div>
        </NavLink>
        <NavLink className="TabbarItem" to="/user">
          <div className={"TabbarItem " + (this.props.selected === 'user' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'user','我的')}>我的</div>
        </NavLink>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.common.tab
})

export default connect(mapStateToProps, { changeTab })(PublicTabbar);