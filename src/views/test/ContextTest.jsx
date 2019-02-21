import React, { Component } from 'react';

const PropTypes = require('prop-types');

class Button extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: [],
      testSelected: 'not',
      like: true
    }
    console.log(this.props, this.context.color);

  }

  render() {
    return (
      <div className="button">
        <button style={{background: this.context.color}}>按钮</button>
      </div>
    )
  }
}

Button.contextTypes = {
  color: PropTypes.string
}

export default Button;