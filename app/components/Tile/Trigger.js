import React from 'react';
import styled from 'styled-components';

const TriggerWrap = styled.div`
  display: ${props => props.selection ? 'block' : 'none'};
	transition: opacity 150ms ease;
	opacity: ${props => props.selection ? '1' : '0'}
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
	transition: transform 150ms ease;
	transform: rotate( ${props => props.open ? '180deg' : '0deg'} );
	&:hover {
		border-left-color: #FCCD34;
	}
`;

export default function(props) {
  return (
    <TriggerWrap
    	selection={props.selection}>
    	<Arrow 
    		open={props.open}
    		onClick={(e) => props.opener(e)} 
    	/>
    </TriggerWrap>
  );
}
