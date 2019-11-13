import React from 'react';

import styled from 'styled-components';

import { Button, Card as AntCard } from 'antd';

export const ToggleButton = styled(Button).attrs({
	block: true,
	type: 'link',
})``;

export const Card = styled(AntCard).attrs({
	hoverable: true,
})`
	width: 400px;
`;

export const Title = styled.h1``;

export function renderTitle(props) {
	const { title } = props;

	return title && <Title>{title}</Title>;
}
