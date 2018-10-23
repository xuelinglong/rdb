import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { changeTab } from './../../redux/actions/common.js';

class PublicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '首页'
    }
  }
  
  render() {
    return(
      <header className="PublicHeader">{this.props.title}</header>
    );
  }
}

const mapStateToProps = state => ({
  title: state.common.changeTab.title
})

export default connect(mapStateToProps, { changeTab })(PublicHeader);
