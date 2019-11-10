import React from 'react';

import { Card, AuthFormTemplateProps } from '../helpers';
import { RegisterForm } from './form';

export interface RegisterCardProps {
	title?: AuthFormTemplateProps['title'];
	onRegister: AuthFormTemplateProps['onAction'];
}

export function RegisterCard(props: RegisterCardProps) {
	const { title, onRegister } = props;

	return (
		<Card title={title}>
			<RegisterForm onRegister={onRegister} />
		</Card>
	);
}
