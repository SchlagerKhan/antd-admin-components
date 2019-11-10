import React from 'react';

import { AuthFormTemplate, AuthFormTemplateProps } from '../helpers';

export interface RegisterFormProps {
	title?: string;
	onRegister: AuthFormTemplateProps['onAction'];
	onError?: AuthFormTemplateProps['onError'];
}

export function RegisterForm(props: RegisterFormProps) {
	const { onRegister, ...restProps } = props;

	const templateProps = Object.assign({}, restProps, {
		onAction: onRegister,
		buttonText: 'Register',
	});

	return <AuthFormTemplate {...templateProps} />;
}
