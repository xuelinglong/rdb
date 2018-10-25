import React, { Component } from 'react';
import './TopicDetail.css';
import { connect } from 'react-redux';
import { fetchTopicDetail } from './../../../redux/actions/topics.js';
import { GetQueryString } from './../../../script/GetQueryString';
import { FormateDate } from './../../../script/commonFun';

class TopicDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicObj: {}
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.getTopics(id);
  }

  getTopics = (id) => {
    var params = {
      accesstoken: this.props.accesstoken
    }
    GetQueryString('isCode');
    this.props.fetchTopicDetail(id,params)
  }

  disqus = () => {
    const id = this.props.match.params.id;
    this.props.history.push(`/topicDetail/${id}/disqus`);
  }

  back = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="topicDetail">
        <div className="Topbar">
          <span className="Topbar-arrow" onClick={()=> this.back()}>&lt; </span>
          <div className="Topbar-disqus" onClick={() => this.disqus()}>
            <input className="Topbar-input" style={{width:'80%',height: '20px'}} readOnly/>
            <span className="Topbar-arrow">评论</span>
          </div>
          <span className="Topbar-collect"></span>
        </div>
        <div className="topicDetail-title">{this.props.topicObj.title}</div>
        <div className="topicDetail-authorBox">
        {this.props.topicObj.author && <div className="topicDetail-author">{this.props.topicObj.author.loginname}</div>}
        {this.props.topicObj.create_at && <div className="topicDetail-time">{FormateDate(this.props.topicObj.create_at)}</div>}
        </div>
        <div className="topicDetail-content" style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: this.props.topicObj.content}}></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topicObj: state.topics.topicObj,
  accesstoken: state.user.accesstoken
})

export default connect(mapStateToProps, { fetchTopicDetail })(TopicDetail);
