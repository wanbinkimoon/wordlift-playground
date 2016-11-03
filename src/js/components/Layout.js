import React from 'react';
import Radium from 'radium';

import Navigator from './Navigator';

@Radium
export default class Layout extends React.Component {
  render() {
    return (
    <div>
      <Navigator />
    </div>
    );
  }
}
