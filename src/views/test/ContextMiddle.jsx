import React, { Component } from 'react';
import ContextButton from './ContextTest';

class ContextMiddle extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <ContextButton></ContextButton>
      </div>
    )
  }
}

export default ContextMiddle;