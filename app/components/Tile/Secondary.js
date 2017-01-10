import React from 'react';
import styled from 'styled-components';

import Switch from '../Switch'

const SecondaryWrap = styled.div`
	display: block;
	position: absolute;
	left: 0px;
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	width: 248px;
	height: 32px;
	padding: 8px;
	color: #626162;
`;

const LinkWrap = styled.div`
	display: inline-block;
	position: relative;
	height: 16px;
`;

const LinkInd = styled.div`
	display: inline-block;
	position: relative;
	top: -4px;
	line-height: 16px;
	font-size: 12px;
	margin: 0 12px 0 4px;

	&:after {
		content: ' ';
		display: inline-block;
		position: absolute;
		right: -12px;
		top: 6px;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #626162;
		margin-right: 4px;
	}
`;

const Category = styled.div`
	display: inline-block;
	position: relative;
	top: -4px;	
	line-height: 16px;
	font-size: 12px;
`;

const QuickEdit = styled.i`
	display: block;
	position: absolute;
	right: 20px;
	top: 9px;
	width: 16px;
	height: 16px;
	text-align: center;
	line-height: 1;
	background-color: #CBCBCB;
	color: #fff;
	border-radius: 2px;
	&:before {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -7px;
		margin-left: -6px;
		font-size: 14px;
	}
	&:hover {
		background-color: #FCCD34;
	}
`;


export default class Secondary extends React.PureComponent {
	constructor() {
	  super();

	  this.state = {
	  	linkActivation: true,
	  };
	}
	
	// Event handler.
	linkActive(e) {
		e.stopPropagation();
		if (this.state.linkActivation === false) {
			this.setState({
				linkActivation: true,
			});
			console.log('link had been activated');
		} else if (this.state.linkActivation === true) {
			this.setState({
				linkActivation: false,
			});
			console.log('link had been deactivated');
		}
	}

	render() {
		return (
			<SecondaryWrap>
				<LinkWrap onClick={(e) => this.linkActive(e)}>
					<Switch />
					<LinkInd> Link </LinkInd>
				</LinkWrap>
				<Category>
					{this.props.entityCategory}
				</Category>
				<QuickEdit className="fa fa-pencil">
					
				</QuickEdit>
			</SecondaryWrap>
		);
	}
}
