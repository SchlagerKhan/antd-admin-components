import React from 'react';
import PropTypes from 'prop-types';

import { Card, AuthFormTemplateProps } from '../helpers';
import { AuthForm } from './form';
import { LoginCardProps } from '../login';
import { RegisterCardProps } from '../register';

export interface AuthCardProps {
	title?: AuthFormTemplateProps['title'];
	onLogin: LoginCardProps['onLogin'];
	onRegister: RegisterCardProps['onRegister'];
}

export function AuthCard(props: AuthCardProps) {
	const { title, onLogin, onRegister } = props;

	return (
		<Card title={title}>
			<AuthForm onLogin={onLogin} onRegister={onRegister} />
		</Card>
	);
}
