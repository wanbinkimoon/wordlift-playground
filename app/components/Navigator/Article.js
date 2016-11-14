import React from 'react';

import Entity from './Article/Entity';
import Lead from './Article/Lead';
import Preview from './Article/Preview';
import ReadMore from './Article/ReadMore';
import Thumb from './Article/Thumb';

export default class Article extends React.PureComponent {
  render() {
    return (
      <div>
        <Entity
          entity={this.props.entity}
          entityLink={this.props.entityLink}
          category={this.props.category}
        />
        <Thumb
          image={this.props.image}
          link={this.props.link}
        />
        <Lead
          title={this.props.title}
          link={this.props.link}
        />
        <Preview
          excerpt={this.props.excerpt}
          link={this.props.link}
        />
        <ReadMore />
      </div>
    );
  }
}
