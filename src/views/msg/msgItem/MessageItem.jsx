import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MessageItem.css';
// import { FormateDate } from './../../../script/commonFun';


export default class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  
  render() {
    // let list = this.props.list;
    let list = [1,2,3];
    return ( 
      <div>
        {
          list&&list.map((item,index)=>(
            <NavLink key={index} to={`/topicDetail/${item.id}`}>
            <div className="msgItem">
              111
            </div>
            </NavLink>
          ))
        }  
      </div>    
    )
  }
}
