import React from 'react';
import styled from 'styled-components';

import Switch from '../Switch'

const SecondaryWrap = styled.div`
	display: block;
	position: absolute;
	left: 248px;
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
	top: -3px;
	line-height: 16px;
	font-size: 14px;
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
	top: -3px;	
	line-height: 16px;
	font-size: 14px;
`;


export default class Secondary extends React.PureComponent {
	render() {
		return (
			<SecondaryWrap>
				<LinkWrap>
					<Switch />
					<LinkInd> Link </LinkInd>
				</LinkWrap>
				<Category>
					{this.props.entityCategory}
				</Category>
			</SecondaryWrap>
		);
	}
}
