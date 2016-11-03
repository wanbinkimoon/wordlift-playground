import React from 'react';
import Radium from 'radium';
import color from 'color';

import Article from './Navigator/Article';

@Radium
export default class Navigator extends React.Component {
  render() {
    return (
    <div
      style={[
        styles.base,
        styles[this.props.kind]
      ]}>
      <Article
        entity={"Entita di test"}
        title={"Accordo per un cessate il fuoco in Siria"}
        excerpt={"Le grandi potenze coinvolte nella guerra in Sirvia, riunite a Monaco di Baviera, hanno raggiunto un accordo per una tregua, che dovrebbe …"}
        />
      <Article
        category={"plain"}
        entity={"Entita di test"}
        title={"Accordo per un cessate il fuoco in Siria"}
        excerpt={"Le grandi potenze coinvolte nella guerra in Sirvia, riunite a Monaco di Baviera, hanno raggiunto un accordo per una tregua, che dovrebbe …"}
        />
      <Article
        category={"what"}
        entity={"Entita di test what"}
        title={"Accordo per un cessate il fuoco in Siria"}
        excerpt={"Le grandi potenze coinvolte nella guerra in Sirvia, riunite a Monaco di Baviera, hanno raggiunto un accordo per una tregua, che dovrebbe …"}
        />
      <Article
        entity={"Entita di test"}
        title={"Accordo per un cessate il fuoco in Siria"}
        excerpt={"Le grandi potenze coinvolte nella guerra in Sirvia, riunite a Monaco di Baviera, hanno raggiunto un accordo per una tregua, che dovrebbe …"}
        />
    </div>
    );
  }
}

//styling for the Navigator wrap
var styles = {
  base: {
    display: 'table',
    position: 'relative',
    margin: '1em auto'
  }
}
