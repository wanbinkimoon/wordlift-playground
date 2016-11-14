import React from 'react';

export default class Entity extends React.ComponentPure {
  render() {
    return (
      <a href={this.props.entityLink}>
        {this.props.entity}
      </a>
    );
  }
}
