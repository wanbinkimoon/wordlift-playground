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

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: false,
      open: false,
      link: true,
    };
  }

  // Opener Handler
  opener(e) {
    e.stopPropagation();
    this.setState({open: !this.state.open});
  }

  // Link handler.
  linker(e) {
    e.stopPropagation();
    this.setState({link: !this.state.link});
  }

  // Selection handler.
  select(e) {
    e.stopPropagation();
    if (this.state.open === false ) {
      this.setState({selection: !this.state.selection});
    }
  }

  render() {
    return (
      <Main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Tile
            occurrencesNumb = {messages.occurrences.defaultMessage}
            entityName = {messages.entity.defaultMessage}
            entityCategory = {messages.category.defaultMessage}
            selection = {this.state.selection}
            open = {this.state.open}
            link = {this.state.link}
            opener = {(e) => this.opener(e)} 
            linker = {(e) => this.linker(e)} 
            select = {(e) => this.select(e)} 
          />
      </Main>
    );
  }
}
