import React from 'react';

export default class Thumb extends React.PureComponent {
  render() {
    return (
      <a href="">
        <img src={this.props.image} alt=" " />
      </a>
    );
  }
}
