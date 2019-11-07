import React from 'react';

import styled from 'styled-components';

import { RegisterCard } from '.';

const { Wrapper, Item, Title } = styled.SB;

function handleRegister(values) {
	console.log('Register', values);
}

export function Card() {
	return (
		<Wrapper>
			<Item>
				<Title>Register Card</Title>
				<RegisterCard title='Register' onRegister={handleRegister} />
			</Item>
		</Wrapper>
	);
}
