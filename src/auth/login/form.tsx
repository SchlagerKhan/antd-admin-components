import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useForm from 'react-hook-form';

import { Form, FormTextField } from '../../form';
import { renderTitle, SubmitButton } from '../helpers';

export function LoginForm(props) {
	const { onLogin } = props;

	const form = useForm();
	const { handleSubmit, setError, errors } = form;

	const loadingState = useState(false);
	const [loading, setLoading] = loadingState;

	async function handleLogin(values) {
		setLoading(true);

		try {
			onLogin(values);
		} catch (err) {
			setError('password', err.toString(), 'Invalid credentials');
			setLoading(false);
		}
	}
	const onSubmit = handleSubmit(handleLogin);

	return (
		<Form form={form} onSubmit={onSubmit}>
			{renderTitle(props)}

			<FormTextField name='email' placeholder='Email' />
			<FormTextField name='password' placeholder='Password' type='password' error={errors.password} />

			<SubmitButton loading={loading}>Login</SubmitButton>
		</Form>
	);
}

LoginForm.propTypes = {
	title: PropTypes.string,
	onLogin: PropTypes.func.isRequired,
};
