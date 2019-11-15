import React from 'react';

import styled from 'styled-components';

import { App } from './helpers.story';

const Wrapper = styled.PageWrapper``;

export function AppPage() {
	return (
		<Wrapper>
			<App />
		</Wrapper>
	);
}
