import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useForm from 'react-hook-form';

import { Form, FormTextField } from '../../form';
import { renderTitle, SubmitButton } from '../helpers';

export function RegisterForm(props) {
	const form = useForm();
	const { handleSubmit, setError, errors } = form;

	const loadingState = useState(false);
	const [loading, setLoading] = loadingState;

	async function handleRegister(values) {
		setLoading(true);

		try {
			props.onRegister(values);
		} catch (err) {
			setError('password', err.toString(), 'User already exists');
			setLoading(false);
		}
	}
	const onSubmit = handleSubmit(handleRegister);

	return (
		<Form form={form} onSubmit={onSubmit}>
			{renderTitle(props)}

			<FormTextField name='email' placeholder='Email' />
			<FormTextField name='password' placeholder='Password' type='password' error={errors.password} />

			<SubmitButton loading={loading}>Register</SubmitButton>
		</Form>
	);
}

RegisterForm.propTypes = {
	title: PropTypes.string,
	onRegister: PropTypes.func.isRequired,
};
