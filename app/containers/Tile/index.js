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

import Tile from '../../components/Tile';

// styling the main element
const Main = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 720px;
  position: relative;
  margin: 100px auto;
  padding: 40px;
  background-color: #FFF;
`;




export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Main>
        <Tile />
      </Main>
    );
  }
}
