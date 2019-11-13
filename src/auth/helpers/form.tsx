import { noop } from 'lodash';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, FormTextField } from '../../form';
import { renderTitle } from './components';

export interface AuthFormTemplateProps {
	title?: string;
	buttonText: string;
	onAction: (values: any) => void | Promise<void>;
	onError?: (err, values) => void;
}

function createOnSubmit(props: AuthFormTemplateProps, setLoading) {
	const { onAction, onError } = props;

	return async (values) => {
		setLoading(true);

		try {
			await onAction(values);
		} catch (err) {
			onError(err, values);
		} finally {
			setLoading(false);
		}
	};
}

export function AuthFormTemplate(props: AuthFormTemplateProps) {
	const { buttonText } = props;

	const [loading, setLoading] = useState(false);
	const onSubmit = createOnSubmit(props, setLoading);

	const formik = useFormik({
		initialValues: {},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.required('Required')
				.email('Invalid email'),
			password: Yup.string().required('Required'),
		}),
		onSubmit,
	});

	return (
		<Form formik={formik} submitText={buttonText} submitLoading={loading}>
			{renderTitle(props)}

			<FormTextField name='email' placeholder='Email' />
			<FormTextField name='password' placeholder='Password' type='password' />
		</Form>
	);
}

AuthFormTemplate.defaultProps = {
	onError: noop,
};
