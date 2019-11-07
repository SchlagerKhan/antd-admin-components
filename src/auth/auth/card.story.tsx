import React from 'react';

import styled from 'styled-components';

import { AuthCard } from '.';

const { Wrapper, Item, Title } = styled.SB;

function handleLogin(values) {
	console.log('Login', values);
}

function handleRegister(values) {
	console.log('Register', values);
}

export function Card() {
	return (
		<Wrapper>
			<Item>
				<Title>Auth Card</Title>
				<AuthCard title='Authenticate' onLogin={handleLogin} onRegister={handleRegister} />
			</Item>
		</Wrapper>
	);
}
