import { noop } from 'lodash';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AuthFormTemplate } from '../helpers';

export function LoginForm(props) {
	const { onLogin, ...restProps } = props;

	const templateProps = Object.assign({}, restProps, {
		onAction: onLogin,
		buttonText: 'Login',
	});

	return <AuthFormTemplate {...templateProps} />;
}

LoginForm.propTypes = {
	title: PropTypes.string,
	onLogin: PropTypes.func.isRequired,
	onError: PropTypes.func,
};
