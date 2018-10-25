import React, { Component } from 'react';
import './DisqusItem.css';
import { FormateDate } from './../../../../script/commonFun';


export default class HomeItem extends Component {
  
  render() {
    let list = this.props.list;
    return ( 
      <div>
        {
          list&&list.map((item,index)=>(
          <div className="disqusItem" key={item.id}>
            <div className="author-box">
              <img src={item.author.avatar_url} alt="author"/>
              <span className="author-name">{item.author.loginname}</span>
              <span className="author-time">{FormateDate(item.create_at)}</span>
            </div>
            <div className="content-box" dangerouslySetInnerHTML={{ __html: item.content}} style={{textAlign: 'left'}}></div>
            <div className="action-box">
              <span className="disqus">回复</span>
              <span className="ups">点赞{item.ups.length}</span>
            </div>
          </div>
          ))
        }  
      </div> 
    )
  }
}
