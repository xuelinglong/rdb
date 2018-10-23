import React, { Component } from 'react';
import './Message.css';
import PublicHeader from './../../components/header/Header';
import PublicTabbar from './../../components/tabbar/Tabbar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PublicHeader />
        <div className="message">I am message!</div>
        <PublicTabbar />
      </div>
    )
  }
}
