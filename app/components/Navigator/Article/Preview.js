import React from 'react';

export default class Preview extends React.ComponentPure {
  render() {
    return (
      <p>
        {this.props.excerpt}
      </p>
    );
  }
}
