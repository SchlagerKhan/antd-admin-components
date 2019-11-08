import React from 'react';

import styled from 'styled-components';

import { AuthPage as Auth } from './index';

const Wrapper = styled.PageWrapper``;

function onLogin(values) {
	console.log('Login', values);
}

function onRegister(values) {
	console.log('Register', values);
}

export function AuthPage() {
	return (
		<Wrapper>
			<Auth title='Test title' onLogin={onLogin} onRegister={onRegister} />
		</Wrapper>
	);
}
