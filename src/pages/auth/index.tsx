import React from 'react';

import styled from 'styled-components';

import { Layout } from '../../layout';
import { AuthCard, LoginCard, LoginCardProps, RegisterCard, RegisterCardProps } from '../../auth';

enum AuthPageMode {
	login = 'login',
	register = 'register',
	both = 'both',
}

export interface AuthPageProps {
	mode: AuthPageMode;
	title?: string;
	onLogin: LoginCardProps['onLogin'];
	onRegister: RegisterCardProps['onRegister'];
}

const Wrapper = styled(Layout)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function renderContent(props: AuthPageProps) {
	const { mode, title, onLogin, onRegister } = props;

	switch (mode) {
		case AuthPageMode.login:
			return <LoginCard title={title} onLogin={onLogin} />;
		case AuthPageMode.register:
			return <RegisterCard title={title} onRegister={onRegister} />;
		case AuthPageMode.both:
			return <AuthCard title={title} onLogin={onLogin} onRegister={onRegister} />;
	}

	throw new Error(`No such AuthPage mode: ${mode}`);
}

export function AuthPage(props: AuthPageProps) {
	return <Wrapper>{renderContent(props)}</Wrapper>;
}

AuthPage.defaultProps = {
	mode: AuthPageMode.both,
};
