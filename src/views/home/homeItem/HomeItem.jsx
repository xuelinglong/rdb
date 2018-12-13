import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeItem.css';
import { FormateDate } from './../../../script/commonFun';


export default class HomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  
  render() {
    let list = this.props.list;
    return ( 
      <div>
        {
          list&&list.map((item,index)=>(
            <NavLink key={item.id} to={`/topicDetail/${item.id}`}>
            <div className="homeItem">
              <div className="homeItem-top-box">
                <div className="homeItem-author-img">
                  <img className="homeItem-author" src={item.author.avatar_url} alt="msg" />
                </div>
                <div className="homeItem-title-box">{ item.title }</div>
                <div className="homeItem-label-box">
                  <span className="homeItem-label">{ item.tab}</span>
                </div>
              </div>
              <div className="homeItem-icon-box">
                <div className="homeItem-icon-left">
                  <span className="homeItem-author-name">{ item.author.loginname }&nbsp;{FormateDate(item.create_at)}</span>
                </div>
                <div className="homeItem-icon-right">
                  <span className="homeItem-visit-count">{ item.visit_count }</span>&nbsp;
                  <span className="homeItem-reply-count">{ item.reply_count }</span>
                </div>
              </div>
            </div>
            </NavLink>
          ))
        }  
      </div>    
    )
  }
}
