import React, { Component } from 'react';
import './DisqusItem.css';


export default class HomeItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let list = this.props.list;
    return ( 
      <div>
        {
          list&&list.map((item,index)=>(
          <div className="disqusItem">
            <div className="author-box">
              <img src={item.author.avatar_url} alt="author"/>
              <span className="author-name">{item.author.loginname}</span>
              <span className="author-time">时间</span>
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
