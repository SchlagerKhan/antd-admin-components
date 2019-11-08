import React from 'react';

import styled from 'styled-components';

import { Pages as App } from './index';

const Wrapper = styled.PageWrapper``;

export function Pages() {
	return (
		<Wrapper>
			<App />
		</Wrapper>
	);
}
