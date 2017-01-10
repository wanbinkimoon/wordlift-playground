import React from 'react';
import styled from 'styled-components';

import Switch from '../Switch'

const SecondaryWrap = styled.div`
	display: block;
	position: absolute;
	left: ${props => props.open ? '0' : '248px'};
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	width: 248px;
	height: 32px;
	padding: 8px;
	color: #626162;
	transition: left 200ms ease;
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
	trasition: opacity 150ms ease;
	opacity: ${props => props.link ? '1' : '0.5'};
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

export default function(props) {
	return (
		<SecondaryWrap open={props.open} >

			<LinkWrap 
				link={props.link} 
				onClick={(e) => props.linker(e)} >

				<Switch link={props.link} />
				<LinkInd link={props.link} > Link </LinkInd>
			</LinkWrap>
			
			<Category>
				{props.entityCategory}
			</Category>

			<QuickEdit className="fa fa-pencil"></QuickEdit>
		</SecondaryWrap>
	);
}
