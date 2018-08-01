import React, { Component } from 'react';
import './Header.css';

export default class PublicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: '首页'
    }
  }
  
  render() {
    return(
      <header className="PublicHeader">{this.props.name}</header>
    );
  }
}
