import React, { Component } from 'react';
import './Home.css';
import PublicHeader from './../../components/header/Header';
import PublicTabbar from './../../components/tabbar/Tabbar';
import PublicMenu from './../../components/menu/Menu';
import HomeItem from './homeItem/HomeItem';
import { connect } from 'react-redux';
import { fetchTopics } from './../../redux/actions/topics.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      tab: 'all'
    }

  }

  changeMenu(menu,page) {
    this.getTopics(menu,page);
  }

  componentWillMount() {
    this.getTopics('all',0);
  }

  getTopics = (menu,page) => {
    var params = {
      tab: menu? menu: this.props.menu,
      page: page ? page : this.props.page,
      limit: this.props.limit
    }
    this.props.fetchTopics(params,page)
  }

  render() {
    return (
      <div>
        <PublicHeader />
        <div className="home">
          <PublicMenu menuChange={this.changeMenu.bind(this)}/>
          <HomeItem list={this.props.topicsList}/>
        </div>
        <PublicTabbar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topicsList: state.topics.topicsList,
  page: state.topics.page,
  limit: state.topics.limit,
  menu: state.common.menu
})

export default connect(mapStateToProps, { fetchTopics })(Home);
