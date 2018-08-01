import React, { Component } from 'react';
import PublicHeader from './components/header/Header';
import PublicTabbar from './components/tabbar/Tabbar';
import './App.css';
import Main from './router.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 'topics',
      title: "首页"
    }
  }
  changeChild(data){
    this.setState({
      selected: data
    }, () => {
      if(this.state.selected === 'topics') {
        this.setState({
          title: "首页"
        })
      } else if(this.state.selected === 'message') {
        this.setState({
          title: "消息"
        })
      } else if(this.state.selected === 'push') {
        this.setState({
          title: "发布"
        })
      } else if(this.state.selected === 'my') {
        this.setState({
          title: "我的"
        })
      }
    });
  }
  render() {
    return (
      <div className="App">
        <PublicHeader name={this.state.title}/>
        <Main />
        <PublicTabbar callBack={this.changeChild.bind(this)} />
      </div>
    );
  }
}

export default App;
