import React, { Component } from 'react';
import './Disqus.css';
import DisqusItem from './disqusItem/DisqusItem';
import { connect } from 'react-redux';
// import { fetchTopicDetail } from './../../../redux/actions/topics.js';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicObj: {}
    }
  }

  back = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="Disqus">
        <div className="Topbar">
          <span className="Topbar-arrow" onClick={()=> this.back()}>&lt; </span>
          <span className="Topbar-content">{this.props.reply_count}条评论</span>
          <span className="Topbar-edit">新建评论</span>
        </div>
        <div className="DisqusList">
          <DisqusItem list={this.props.replies}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reply_count: state.topics.topicObj.reply_count,
  replies: state.topics.topicObj.replies,
  accesstoken: state.user.accesstoken
})

export default connect(mapStateToProps, { })(Disqus);
