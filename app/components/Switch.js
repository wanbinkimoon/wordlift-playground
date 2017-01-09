import React from 'react';
import styled from 'styled-components';

const SwitchBg = styled.div`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	width: 24px;
	height: 16px;
	background: #7ED321;
	border-radius: 10px;
`;

const SwtichBullet = styled.div`
	display: inline-block;
	position: absolute;
	top: 2px;
	right: 2px
	width: 12px;
	height: 12px;
	background: #FFFFFF;
	border-radius: 50%;
`;

export default class Switch extends React.PureComponent {
	render() {
		return (
			<SwitchBg>
					<SwtichBullet></SwtichBullet>
			</SwitchBg>
		);
	}
}
