import React from 'react';

import styled from 'styled-components';

import { Auth } from './helpers.story';

const Wrapper = styled.PageWrapper``;

export function AuthPage() {
	return (
		<Wrapper>
			<Auth />
		</Wrapper>
	);
}
