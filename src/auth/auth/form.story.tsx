import React from 'react';

import styled from 'styled-components';

import { AuthForm } from '.';

const { Wrapper, Item, Title } = styled.SB;

function handleLogin(values) {
	console.log('Login', values);
}

function handleRegister(values) {
	console.log('Register', values);
}

export function Form() {
	return (
		<Wrapper>
			<Item>
				<Title>Auth Form</Title>
				<AuthForm onLogin={handleLogin} onRegister={handleRegister} />
			</Item>
		</Wrapper>
	);
}
