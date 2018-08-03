import React, { Component } from 'react';
import './Menu.css';

export default class PublicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all"
    }
  }

  changeSelected(val) {
    this.setState({
      selected: val
    },()=>{
      this.props.menuChange(this.state.selected)
    })
  }
  
  render() {
    return(
      <header className="PublicMenu">
        <div className={"menuItem " + (this.state.selected === 'all' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "all")}>全部</div>
        <div className={"menuItem " + (this.state.selected === 'good' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "good")}>精华</div>
        <div className={"menuItem " + (this.state.selected === 'share' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "share")}>分享</div>
        <div className={"menuItem " + (this.state.selected === 'ask' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "ask")}>问答</div>
        <div className={"menuItem " + (this.state.selected === 'job' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "job")}>招聘</div>
        <div className={"menuItem " + (this.state.selected === 'dev' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "dev")}>测试贴</div>
      </header>
    );
  }
}
