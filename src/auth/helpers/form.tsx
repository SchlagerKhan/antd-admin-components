import { noop } from 'lodash';

import React, { useState } from 'react';

import useForm from 'react-hook-form';

import { Form, FormTextField } from '../../form';
import { renderTitle, SubmitButton } from './components';

export interface AuthFormTemplateProps {
	title?: string;
	buttonText: string;
	onAction: (values: any) => void | Promise<void>;
	onError?: (err, form) => void;
}

function createOnSubmit(props: AuthFormTemplateProps, form, setLoading) {
	const { onAction, onError } = props;

	return async (values) => {
		setLoading(true);

		try {
			await onAction(values);
		} catch (err) {
			onError(err, form);
		} finally {
			setLoading(false);
		}
	};
}

export function AuthFormTemplate(props: AuthFormTemplateProps) {
	const { buttonText } = props;

	const form = useForm();

	const [loading, setLoading] = useState(false);
	const onSubmit = createOnSubmit(props, form, setLoading);

	return (
		<Form form={form} onSubmit={onSubmit}>
			{renderTitle(props)}

			<FormTextField name='email' placeholder='Email' />
			<FormTextField name='password' placeholder='Password' type='password' registerOpts={{ required: 'Password required' }} />

			<SubmitButton loading={loading}>{buttonText}</SubmitButton>
		</Form>
	);
}

AuthFormTemplate.defaultProps = {
	onError: noop,
};
