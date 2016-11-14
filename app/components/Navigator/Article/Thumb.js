import React from 'react';

export default class Thumb extends React.ComponentPure {
  render() {
    return (
      <a href="">
        <img src={this.props.image} alt=" " />
      </a>
    );
  }
}
