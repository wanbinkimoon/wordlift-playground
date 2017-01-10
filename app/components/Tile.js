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
	background-color: #f5f5f5;
	box-shadow: 0 4px 4px -3px rgba(0,0,0,.25), 0 8px 8px -6px rgba(0,0,0,.25);
	trasition: all 150ms ease-out;
	${props => props.selection ? '&:hover{transform: scale(1)}' : '&:hover{transform: scale(1.01)}'};
`;

export default function(props) {
	return (
		<TileWrap 
			selection={props.selection}
			onClick={(e) => props.select(e)}
			>
			<Primary 
				occurrencesNumb={props.occurrencesNumb}
				entityName={props.entityName}
				open={props.open}
				selection={props.selection}
			/>

			<Secondary 
				entityCategory={props.entityCategory}
				open={props.open}
				link={props.link}
				linker={(e) => props.linker(e)}
			/>
			
			<Trigger 
				selection={props.selection}
				open={props.open} 
				opener={(e) => props.opener(e)} 
			/>

		</TileWrap>
	);
}

