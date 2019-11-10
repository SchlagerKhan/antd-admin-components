import React from 'react';

import { AuthFormTemplate, AuthFormTemplateProps } from '../helpers';

export interface LoginFormProps {
	title?: string;
	onLogin: AuthFormTemplateProps['onAction'];
	onError?: AuthFormTemplateProps['onError'];
}

export function LoginForm(props: LoginFormProps) {
	const { onLogin, ...restProps } = props;

	const templateProps = Object.assign({}, restProps, {
		onAction: onLogin,
		buttonText: 'Login',
	});

	return <AuthFormTemplate {...templateProps} />;
}
