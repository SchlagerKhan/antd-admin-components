import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../helpers';
import { LoginForm } from './form';

export function LoginCard(props) {
	const { title, onLogin } = props;

	return (
		<Card title={title}>
			<LoginForm onLogin={onLogin} />
		</Card>
	);
}

LoginCard.propTypes = {
	title: PropTypes.string.isRequired,
	onLogin: PropTypes.func.isRequired,
};
