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
`;

export default class Tile extends React.Component {
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

		// Event handler.
	linker(e) {
		e.stopPropagation();
		this.setState({link: !this.state.link});
	}

	// Event handler.
	select(e) {
		e.stopPropagation();
		this.setState({selection: !this.state.selection});
		console.log(this.state.selection);
	}
	
	render() {
		return (
			<TileWrap 
				onClick={(e) => this.select(e)}
				>
				
				<Primary 
					occurrencesNumb="95"
					entityName="Senato della Repubblica"
					open={this.state.open}
					selection={this.state.selection}
				/>
				
				<Secondary 
					entityCategory="Creative Work"
					open={this.state.open}
					link={this.state.link}
					linker={(e) => this.linker(e)}
				/>
				
				<Trigger 
					open={this.state.open} 
					opener={(e) => this.opener(e)} 
				/>

			</TileWrap>
		);
	}
}

