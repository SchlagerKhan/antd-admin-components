import React from 'react';

import styled from 'styled-components';

import { AuthPage as Auth } from './index';

const Wrapper = styled.PageWrapper``;

export function AuthPage() {
	return (
		<Wrapper>
			<Auth />
		</Wrapper>
	);
}
