import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import { AuthPage, AuthPageProps } from '../auth';
import { AppPage, AppPageProps } from '../app';

/* TYPES */
export interface AdminProps {
	title: string;
	favicons?: {
		'16x16': string;
		'32x32': string;
	};

	authPageProps?: AuthPageProps;
	renderAuth?: (props: AdminProps) => JSX.Element;

	appPageProps?: AppPageProps;
	renderApp?: (props: AdminProps) => JSX.Element;
}

/* COMPONENTS */
const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
`;

/* RENDERING */
function renderFavicons(props: AdminProps) {
	const { favicons } = props;

	if (!favicons) {
		return null;
	}

	return (
		<>
			<link rel='icon' type='image/png' sizes='32x32' href={favicons['32x32']} />
			<link rel='icon' type='image/png' sizes='16x16' href={favicons['16x16']} />
		</>
	);
}

function renderHelmet(props: AdminProps) {
	const { title } = props;

	return (
		<Helmet>
			<meta charSet='utf-8' />

			<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />
			<meta name='theme-color' content='white' />

			{renderFavicons(props)}

			<title>{title}</title>
		</Helmet>
	);
}

function defaultRenderAuth(props: AdminProps) {
	return <AuthPage {...props.authPageProps} />;
}

function defaultRenderApp(props: AdminProps) {
	return <AppPage {...props.appPageProps} />;
}

export function Admin(props: AdminProps) {
	const { renderAuth, renderApp } = props;

	return (
		<Wrapper>
			{renderHelmet(props)}
			<Router>
				<Switch>
					<Route path='/auth' exact render={() => renderAuth(props)} />
					<Route path='/' render={() => renderApp(props)} />
				</Switch>
			</Router>
		</Wrapper>
	);
}

Admin.defaultProps = {
	renderAuth: defaultRenderAuth,
	renderApp: defaultRenderApp,
};
