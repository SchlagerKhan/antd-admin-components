import React from 'react';

import styled from 'styled-components';

import { RegisterForm } from '.';

const { Wrapper, Item, Title } = styled.SB;

function handleRegister(values) {
	console.log('Register', values);
}

export function Form() {
	return (
		<Wrapper>
			<Item>
				<Title>Register Form</Title>
				<RegisterForm onRegister={handleRegister} />
			</Item>
		</Wrapper>
	);
}
