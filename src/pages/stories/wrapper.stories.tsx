import React from 'react';

import styled from 'styled-components';

import { Admin, AdminProps } from '../wrapper/index';
import { onLogin, renderAuth, renderApp } from './helpers.story';

const { PageWrapper } = styled.SB;

export function WithRender() {
	const adminProps: AdminProps = {
		title: 'Test title',
		renderAuth,
		renderApp,
	};

	return (
		<PageWrapper>
			<Admin {...adminProps} />
		</PageWrapper>
	);
}

export function WithProps() {
	const adminProps: AdminProps = {
		title: 'Test title',
		authProps: {
			title: 'Login',
			onLogin,
		},
		appProps: {
			items: [],
		},
	};

	return (
		<PageWrapper>
			<Admin {...adminProps} />
		</PageWrapper>
	);
}

export default { title: 'Pages/Wrapper' };
