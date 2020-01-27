import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import { Spin } from 'antd';

import { AuthPage } from '../auth';
import { AppPage } from '../app';

import { AdminProps } from './types';
import { renderHelmet } from './helmet';

export * from './types';

/* COMPONENTS */
const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
`;

function defaultRenderAuth(props: AdminProps) {
	return <AuthPage {...props.authProps} />;
}

function defaultRenderApp(props: AdminProps) {
	return <AppPage {...props.appProps} />;
}

function renderLoading() {
	return (
		<Spin>
			<div style={{ width: '100%', height: '100vh' }} />
		</Spin>
	);
}

/* RENDERING */
export function Admin(props: AdminProps) {
	const { isLoading, renderAuth, renderApp } = props;

	if (isLoading) {
		return renderLoading();
	}

	return (
		// prettier-ignore
		<Wrapper>
			{renderHelmet(props)}
			<Router>
				<Switch>
					<Route path='/auth' exact>
						{renderAuth(props)}
					</Route>
					<Route path='/'>
						{renderApp(props)}
					</Route>
				</Switch>
			</Router>
		</Wrapper>
	);
}

Admin.defaultProps = {
	renderAuth: defaultRenderAuth,
	renderApp: defaultRenderApp,
};
