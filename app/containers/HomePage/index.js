/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

// styling the main element
const Main = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 720px;
  background-color: #FFF;
`;

// styling the global title of the page
const Title = styled.h1`
  display: block;
  font-size: 26px;
  text-align: center;
  `;

// styling the list of components
const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  `;
// styling the single elements
const Component = styled.li`
  display: block;
  font-size: 26px;
  text-align: center;
  `;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Main>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <List>
          <Component>
            <a href="/navigator">Navigator</a>
          </Component>
        </List>
      </Main>
    );
  }
}
