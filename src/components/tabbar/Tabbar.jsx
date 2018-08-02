import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Tabbar.css';

export default class PublicTabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'topics'
    }
  }

  changeSelected(val) {
    this.setState({
      selected: val
    },()=>{
      this.props.callBack(this.state.selected)
    })
  }

  render() {
    return(
      <footer className="PublicTabbar">
        <NavLink className="TabbarItem" to="/">
          <div className={"TabbarItem " + (this.state.selected === 'topics' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'topics')} >主题</div>
        </NavLink>
        <NavLink className="TabbarItem" to="/message">
          <div className={"TabbarItem " + (this.state.selected === 'message' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'message')}>消息</div>
        </NavLink>
        <NavLink className="TabbarItem" to="/push">
          <div className={"TabbarItem " + (this.state.selected === 'push' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'push')}>发布</div>
        </NavLink>
        <NavLink className="TabbarItem" to="/user">
          <div className={"TabbarItem " + (this.state.selected === 'user' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'user')}>我的</div>
        </NavLink>
      </footer>
    );
  }
}