import React, { Component } from 'react';
import './Test.css';
import PublicHeader from './../../components/header/Header';
import PublicTabbar from './../../components/tabbar/Tabbar';
import ContextMiddle from './ContextMiddle';
import { connect } from 'react-redux';
import { fetchTopics } from './../../redux/actions/topics.js';

const PropTypes = require('prop-types');

class Test extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: [],
      testSelected: 'not',
      like: true
    }
    console.log(this.props, this.context.contextName);

  }

  getChildContext() {
    return {color: "purple"};
  }

  // async componentDidMount(willSelect) {
  //   await new Promise((resolve) => {
  //     this.setState(willSelect, resolve)
  //   });
  // }

  changeTab = (willSelect) => {
    console.log(willSelect)
    const nowTab = this.state.testSelected;
    if(nowTab !== willSelect) {
      // this.componentDidMount({tab: willSelect})
      this.setState({
        testSelected: willSelect
      })
    }
    console.log(this.props, this.props.name);
  }

  handlerChange = (boolean) => {
    let val = boolean;
    val ? this.setState({
      like: true
    }) : this.setState({
      like: false
    })
  }

  render() {
    return (
      <div>
        <PublicHeader />
        <div className="test">
          <div className="testTab">
            <span className={"not " + (this.state.testSelected === 'not' ? 'testSelected' : '')} onClick={() => this.changeTab('not')}>待支付</span>
            <span className={"all " + (this.state.testSelected === 'all' ? 'testSelected' : '')} onClick={() => this.changeTab('all')}>全部</span>
          </div>
          <div className="body">
            此时状态: {this.state.testSelected}

            <ContextMiddle></ContextMiddle>
          </div>
        </div>
        <PublicTabbar />
      </div>
    )
  }
}

Test.childContextTypes = {
  color: PropTypes.string
}

export default Test;