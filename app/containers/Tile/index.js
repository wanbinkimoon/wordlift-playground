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

// Define props and state 
const tiles = [{
  occurrences: 10,
  entity: 'Orso Verde',
  category: 'Oggetto sulla scrivania',
  isOpen: false,
  isSelected: false,
  isLinked: false
  },{
  occurrences: 13,
  entity: 'Orso Giallo',
  category: 'Oggetto sulla scrivania',
  isOpen: false,
  isSelected: false,
  isLinked: false
  }, {
  occurrences: 34,
  entity: 'Orso Blu',
  category: 'Oggetto sulla scrivania',
  isOpen: false,
  isSelected: false,
  isLinked: false
  }];


export default class TileComp extends React.Component {
  constructor() {
    super();
    this.state = {
      tiles: tiles,
    };
  }

  // Selection handler.
  select(e, i) {
    e.stopPropagation();
    if (!this.state.tiles[i].isOpen) {
      this.state.tiles[i].isSelected = !this.state.tiles[i].isSelected;
      this.setState({tiles: tiles});
    }
  }

  // Opener Handler
  opener(e, i) {
    e.stopPropagation();
    this.state.tiles[i].isOpen = !this.state.tiles[i].isOpen;
    this.setState({tiles: tiles});
  }

  // Link handler.
  linker(e, i) {
    e.stopPropagation();
    this.state.tiles[i].isLinked = !this.state.tiles[i].isLinked;
    this.setState({tiles: tiles});
  }

  render() {
    return (
      <Main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
         {this.state.tiles.map(
          (tile ,i) => 
            <Tile 
              key={i}
              tile={tile} 
              select = {(e) => this.select(e, i)} 
              opener = {(e) => this.opener(e, i)} 
              linker = {(e) => this.linker(e, i)} />
          )}
      </Main>
    );
  }
}
