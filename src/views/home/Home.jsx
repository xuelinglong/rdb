import React, { Component } from 'react';
import { apis, actions } from './../../redux/request.js';
import './Home.css';
import PublicMenu from './../../components/menu/Menu';
import HomeItem from './homeItem/HomeItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      tab: 'all'
    }
  }

  changeMenu(data) {
    this.setState({
      tab: data,
    }, () => {
      this.getTopics();
    })
  }

  componentWillMount() {
    this.getTopics();
  }

  getTopics() {
    var params = {
      tab: this.state.tab,
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
        <PublicMenu menuChange={this.changeMenu.bind(this)}/>
        <HomeItem  list={this.state.list}/>
      </div>
    )
  }
}
