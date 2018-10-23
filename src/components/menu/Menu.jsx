import React, { Component } from 'react';
import './Menu.css';
import { connect } from 'react-redux';
import { changeMenu } from './../../redux/actions/common.js';

class PublicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all"
    }
  }

  changeSelected(val) {
    this.props.changeMenu(val,()=>{
      this.props.menuChange(val,0)
    });
  }
  
  render() {
    return(
      <header className="PublicMenu">
        <div className={"menuItem " + (this.props.selected === 'all' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "all")}>全部</div>
        <div className={"menuItem " + (this.props.selected === 'good' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "good")}>精华</div>
        <div className={"menuItem " + (this.props.selected === 'share' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "share")}>分享</div>
        <div className={"menuItem " + (this.props.selected === 'ask' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "ask")}>问答</div>
        <div className={"menuItem " + (this.props.selected === 'job' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "job")}>招聘</div>
        <div className={"menuItem " + (this.props.selected === 'dev' ? 'menuSelected' : '')} onClick={this.changeSelected.bind(this, "dev")}>测试贴</div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.common.menu
})

export default connect(mapStateToProps, { changeMenu })(PublicMenu);
