import React, { Component } from 'react';
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
        <div className={"TabbarItem " + (this.state.selected === 'topics' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'topics')} >主题</div>
        <div className={"TabbarItem " + (this.state.selected === 'message' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'message')}>消息</div>
        <div className={"TabbarItem " + (this.state.selected === 'push' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'push')}>发布</div>
        <div className={"TabbarItem " + (this.state.selected === 'my' ? 'selected' : '')} onClick={this.changeSelected.bind(this, 'my')}>我的</div>
      </footer>
    );
  }
}