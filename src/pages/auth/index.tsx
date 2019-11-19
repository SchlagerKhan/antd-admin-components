import React from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

import { Layout } from '../../layout';
import { AuthCard, LoginCard, LoginCardProps, RegisterCard, RegisterCardProps } from '../../auth';

export interface AuthPageProps {
	mode?: 'login' | 'register' | 'both';
	title?: string;
	isLoggedIn?: boolean;
	onLogin?: LoginCardProps['onLogin'];
	onRegister?: RegisterCardProps['onRegister'];
}

const Wrapper = styled(Layout)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function renderContent(props: AuthPageProps) {
	const { mode, title, onLogin, onRegister } = props;

	switch (mode) {
		case 'login':
			return <LoginCard title={title} onLogin={onLogin} />;
		case 'register':
			return <RegisterCard title={title} onRegister={onRegister} />;
		case 'both':
			return <AuthCard title={title} onLogin={onLogin} onRegister={onRegister} />;
	}

	throw new Error(`No such AuthPage mode: ${mode}`);
}

export function AuthPage(props: AuthPageProps) {
	if (props.isLoggedIn === true) {
		return <Redirect to='/' />;
	}

	return <Wrapper>{renderContent(props)}</Wrapper>;
}

AuthPage.defaultProps = {
	mode: 'login',
};
