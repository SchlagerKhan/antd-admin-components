import React from 'react';

import styled from 'styled-components';

import { LoginCard } from '.';

const { Wrapper, Item, Title } = styled.SB;

function handleLogin(values) {
	console.log('Login', values);
}

export function Card() {
	return (
		<Wrapper>
			<Item>
				<Title>Login Card</Title>
				<LoginCard title='Login' onLogin={handleLogin} />
			</Item>
		</Wrapper>
	);
}
