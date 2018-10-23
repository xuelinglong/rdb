import React, { Component } from 'react';
import PublicHeader from './components/header/Header';
import PublicTabbar from './components/tabbar/Tabbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './router';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 'topics',
      title: "首页"
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <PublicHeader />
        <Main tab={this.state.tab} />
        <PublicTabbar />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
