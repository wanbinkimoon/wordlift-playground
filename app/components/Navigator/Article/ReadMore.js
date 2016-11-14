import React from 'react';

export default class ReadMore extends React.ComponentPure {
  render() {
    return (
      <a href={this.props.link}>
        Leggi l&#39;articolo&#133;
      </a>
    );
  }
}
