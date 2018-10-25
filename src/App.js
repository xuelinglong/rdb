import React, { Component } from 'react';
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
        {/* <PublicHeader /> */}
        <Main />
        {/* <PublicTabbar /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
