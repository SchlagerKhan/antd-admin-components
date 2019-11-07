import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../helpers';
import { AuthForm } from './form';

export function AuthCard(props) {
	const { title, onLogin, onRegister } = props;

	return (
		<Card title={title}>
			<AuthForm onLogin={onLogin} onRegister={onRegister} />
		</Card>
	);
}

AuthCard.propTypes = {
	title: PropTypes.string.isRequired,
	onLogin: PropTypes.func.isRequired,
	onRegister: PropTypes.func.isRequired,
};
