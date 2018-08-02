import React, { Component } from 'react';
import { apis, actions } from './../../redux/request.js';
import './Home.css';
import HomeItem from './homeItem/HomeItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    var params = {
      tab: 'all',
      page: 0,
      limit: 20
    }
    actions.get(apis.getTopics.url, params,(data) => {
      if(data) {
        this.setState({
          list: data
        });
      }
    })
  }
  render() {
    return (
      <div className="home">
        <HomeItem  list={this.state.list}/>
      </div>
    )
  }
}
