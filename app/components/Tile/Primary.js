import React from 'react';
import styled from 'styled-components';

const PrimaryWrap = styled.div`
	display: block;
	position: absolute;
	left: -248px;
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	width: 248px;
	height: 32px;
`;

const Occurrences = styled.div`
	display: inline-block;
	position: relative;
	margin: 8px;
	width: 16px;
	height: 16px;
	border-radius: 2px;
	padding: 2px 0;
	text-align: center;
	font-weight: 600;
	font-size: 12px;
	color: #FFFFFF;
	letter-spacing: -0.21px;
	line-height: 12px;

	background-color: #2E92FF;
`;

const Entity = styled.div`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	max-width: 200px;
	height: 32px;
	line-height: 32px;
	font-weight: 600;
	font-size: 12px;
	color: #2E92FF;
`;

const Cloud = styled.i`
	display: block;
	position: absolute;
	right: 20px;
	top: 8px;
	font-size: 14px;
	line-height: 1;
	color: #CBCBCB;
`;

export default class Primary extends React.PureComponent {
	render() {
		return (
			<PrimaryWrap>
				<Occurrences>
					{this.props.occurrencesNumb}
				</Occurrences>
				<Entity>
					{this.props.entityName}
				</Entity>
				<Cloud className="fa fa-cloud"></Cloud>
			</PrimaryWrap>
		);
	}
}
