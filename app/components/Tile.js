import React from 'react';
import styled from 'styled-components';


import Primary from './Tile/Primary';
import Secondary from './Tile/Secondary';
import Trigger from './Tile/Trigger';

const TileWrap = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 2px;
  margin: 8px auto;
  width: 248px;
  height: 32px;
  font-family: OpenSans;
  background-color: #F8F8F8;
`;

export default class Tile extends React.PureComponent {
  render() {
    return (
      <TileWrap>

        <Primary 
        	occurrencesNumb="95"
        	entityName="Senato della Repubblica"
        />
        
        <Secondary 
					entityCategory="Creative Work"
        />
        <Trigger />
      </TileWrap>
    );
  }
}

