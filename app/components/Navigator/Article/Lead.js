import React from 'react';

export default class Lead extends React.PureComponent {
  render() {
    return (
      <a href={this.props.link}>
        {this.props.title}
      </a>
    );
  }
}
