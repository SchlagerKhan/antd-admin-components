import React from 'react';

import styled from 'styled-components';

import { LoginForm } from '.';

const { Wrapper, Item, Title } = styled.SB;

function handleLogin(values) {
	console.log('Login', values);
}

export function Form() {
	return (
		<Wrapper>
			<Item>
				<Title>Login Form</Title>
				<LoginForm onLogin={handleLogin} />
			</Item>
		</Wrapper>
	);
}
