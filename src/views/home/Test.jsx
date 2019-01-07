import React, { Component } from 'react';
import './Test.css';
// import Arrow from './arrow/Arrow.jsx';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="820">
        <rect x="20" y="20" rx="10" ry="10" width="90" height="40"
          style={{"fill":"red","stroke":"black","strokeWidth":1,"opacity":0.5}} />
        <text x="55" y="45" fontSize="12" style={{"zIndex":"9999"}}>发起人</text>
        <Arrow x1="65" y1="60" x2="65" y2="150" />
        <line x1="65" y1="60" x2="65" y2="150"
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>
          <line x1="60" y1="145" x2="65" y2="150"
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>
          <line x1="65" y1="150" x2="70" y2="145"
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>

        <rect x="20" y="151" rx="10" ry="10" width="90" height="40"
          style={{"fill":"red","stroke":"black","strokeWidth":1,"opacity":0.5}} />
        <text x="55" y="175" fontSize="12" style={{"zIndex":"9999"}}>审核</text>

        <line x1="65" y1="191" x2="65" y2="221"
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>
          <line x1="20" y1="221" x2="110" y2="221"
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>
          <line x1="20" y1="221" x2="20" y2="241"
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>

          <line x1="110" y1="221" x2="110" y2="241"
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>

      </svg> */}

        {/* <div id="infinity"></div>
        <div id="magnifying-glass"></div> */}

        {/* <div className="box"></div> */}

        <dl>
          <dt>11</dt>
          <dd><input type="text" value="123" name="id" size="12" /></dd>
        </dl>

        <div className="iii"></div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   topicsList: state.topics.topicsList,
//   page: state.topics.page,
//   limit: state.topics.limit,
//   menu: state.common.menu
// })

// export default connect(mapStateToProps, { fetchTopics })(Home);
