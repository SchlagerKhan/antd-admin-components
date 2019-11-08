import { noop } from 'lodash';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AuthFormTemplate } from '../helpers';

export function RegisterForm(props) {
	const { onRegister, ...restProps } = props;

	const templateProps = Object.assign({}, restProps, {
		onAction: onRegister,
		buttonText: 'Register',
	});

	return <AuthFormTemplate {...templateProps} />;
}
RegisterForm.propTypes = {
	title: PropTypes.string,
	onRegister: PropTypes.func.isRequired,
	onError: PropTypes.func,
};
