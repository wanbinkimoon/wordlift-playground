import React from 'react';

export default class Preview extends React.PureComponent {
  render() {
    return (
      <p>
        {this.props.excerpt}
      </p>
    );
  }
}
