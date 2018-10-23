import React, { Component } from 'react';
import './Push.css';
import PublicHeader from './../../components/header/Header';
import PublicTabbar from './../../components/tabbar/Tabbar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PublicHeader />
        <div className="push">I am push!</div>
        <PublicTabbar />
      </div>
    )
  }
}
