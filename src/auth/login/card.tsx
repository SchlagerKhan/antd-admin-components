import React from 'react';
import PropTypes from 'prop-types';

import { Card, AuthFormTemplateProps } from '../helpers';
import { LoginForm } from './form';

export interface LoginCardProps {
	title?: AuthFormTemplateProps['title'];
	onLogin: AuthFormTemplateProps['onAction'];
}

export function LoginCard(props: LoginCardProps) {
	const { title, onLogin } = props;

	return (
		<Card title={title}>
			<LoginForm onLogin={onLogin} />
		</Card>
	);
}
