import React from 'react';

import styled from 'styled-components';

import { Admin } from '../wrapper/index';
import { App, Auth } from './helpers.story';

const { PageWrapper } = styled.SB;

export function Wrapper() {
	return (
		<PageWrapper>
			<Admin title='Test title' renderApp={App} renderAuth={Auth} />
		</PageWrapper>
	);
}
