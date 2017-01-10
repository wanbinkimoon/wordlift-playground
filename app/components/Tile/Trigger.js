import React from 'react';
import styled from 'styled-components';

const TriggerWrap = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 16px;
  height: 32px;
  padding: 8px 4px;
  background-color: #F1F1F1;
`;

const Arrow = styled.div`
	display: block;
	width: 8px;
	height: 8px;
 	border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #7D7D7D;
	border-radius: 16px;
	trasform: rotate(0);
	&:hover {
		border-left-color: #FCCD34;
	}
`;

export default class Tile extends React.PureComponent {
	constructor() {
	  super();
	  this.state = {
	  	panelOpen: false,
	  	arrowRotation: '0deg',
	  };
	}
	
	// Event Handler
	panelOpen() {
		// Arrow rotate.
		if (this.state.panelOpen === false) {
			this.setState({
				panelOpen: true,
				arrowRotation: '180deg',
			});
		} else if (this.state.panelOpen === true) {
			this.setState({
				panelOpen: false,
				arrowRotation: '0deg',
			});
		}

		// Event logger.
		console.log(this.state.panelOpen);
		console.log(this.state.arrowRotation);
	}

  render() {
    return (
      <TriggerWrap>
      	<Arrow onClick={() => this.panelOpen()} />
      </TriggerWrap>
    );
  }
}
