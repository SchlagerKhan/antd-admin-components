import React from 'react';
import PropTypes from 'prop-types';

import { Card, AuthFormTemplateProps } from '../helpers';
import { RegisterForm } from './form';

export interface RegisterCardProps {
	title?: AuthFormTemplateProps['title'];
	onRegister: AuthFormTemplateProps['onAction'];
}

export function RegisterCard(props) {
	const { title, onRegister } = props;

	return (
		<Card title={title}>
			<RegisterForm onRegister={onRegister} />
		</Card>
	);
}

RegisterCard.propTypes = {
	title: PropTypes.string.isRequired,
	onRegister: PropTypes.func.isRequired,
};
