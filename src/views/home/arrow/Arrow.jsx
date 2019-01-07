import React, { Component } from 'react';

export default class Arrow extends Component {
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
        <line x1={this.props.x1} y1={this.props.y1} x2={this.props.x2} y2={this.props.y2}
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>
          <line x1={Number(this.props.x2)-5} y1={this.props.y2-5} x2={this.props.x2} y2={this.props.y2}
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>
          <line x1={this.props.x2} y1={this.props.y2} x2={Number(this.props.x2)+5} y2={Number(this.props.y2)-5}
          style={{"stroke":"rgb(99,99,99)","strokeWidth":2}}/>
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
