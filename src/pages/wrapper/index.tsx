import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

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

/* RENDERING */
export function Admin(props: AdminProps) {
	const { renderAuth, renderApp } = props;

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
