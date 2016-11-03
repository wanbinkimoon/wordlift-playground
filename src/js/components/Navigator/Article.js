import React from 'react';

import Entity from './Article/Entity';
import ReadMore from './Article/ReadMore';


export default class Article extends React.Component {
  render() {
    return (
      <div>
        <Entity />
        <a href="">
          <img src="http://www.fillmurray.com/182/120" alt=""/>
        </a>
        <a href="">
          <h5>Article title on at least two lines</h5>
        </a>
        <p>
          Le grandi potenze coinvolte nella guerra in Sirvia, riunite a Monaco di Baviera, hanno raggiunto un accordo per una tregua, che dovrebbe …
        </p>
        <ReadMore />
      </div>
    );
  }
}
