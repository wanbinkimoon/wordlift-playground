import React from 'react';
import Radium from 'radium';
import color from 'color';

import Entity from './Article/Entity';
import ReadMore from './Article/ReadMore';

@Radium
export default class Article extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        style={[
          styles.base,
        ]}>
        <Entity entity={this.props.entity} category={this.props.category}/>
        <a href="">
          <img src="http://www.fillmurray.com/182/120" alt=""/>
        </a>
        <a href="">
          <h5>
            {this.props.title}
          </h5>
        </a>
        <p>
          {this.props.excerpt}
        </p>
        <ReadMore />
      </div>
    );
  }
}

//styling for the Navigator wrap
var styles = {
  base: {
    display: 'inline-block',
    width: '182px',
    marginRight: '8px',
  }
};
