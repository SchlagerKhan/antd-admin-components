import { noop } from 'lodash';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useForm from 'react-hook-form';

import { Form, FormTextField } from '../../form';
import { renderTitle, SubmitButton } from './components';

function createOnSubmit(props, form, setLoading) {
	const { onAction, onError } = props;
	const { handleSubmit } = form;

	return handleSubmit(async (values) => {
		setLoading(true);

		try {
			await onAction(values);
		} catch (err) {
			onError(err, form);
		} finally {
			setLoading(false);
		}
	});
}

export function AuthFormTemplate(props) {
	const { buttonText } = props;

	const form = useForm();
	const { register, errors } = form;

	const [loading, setLoading] = useState(false);
	const onSubmit = createOnSubmit(props, form, setLoading);

	return (
		<Form form={form} onSubmit={onSubmit}>
			{renderTitle(props)}

			<FormTextField name='email' placeholder='Email' />
			<FormTextField
				name='password'
				placeholder='Password'
				type='password'
				register={register({
					required: 'Password required',
				})}
			/>

			<SubmitButton loading={loading}>{buttonText}</SubmitButton>
		</Form>
	);
}

AuthFormTemplate.propTypes = {
	title: PropTypes.string,
	buttonText: PropTypes.string.isRequired,
	onAction: PropTypes.func.isRequired,
	onError: PropTypes.func,
};

AuthFormTemplate.defaultProps = {
	onError: noop,
};
