import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../helpers';
import { RegisterForm } from './form';

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
