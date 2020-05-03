import { noop } from 'lodash';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, FormTextField } from '../../form';
import { renderTitle } from './components';

export interface AuthFormTemplateProps {
	title?: string;
	buttonText: string;
	onAction: (values: any) => void | string | Promise<void | string>;
	onError?: (err, values) => void;
}

async function callAction(props: AuthFormTemplateProps, values, formik, setLoading) {
	const { onAction } = props;
	const errMessage = await onAction(values);

	if (errMessage) {
		formik.setFieldError('password', errMessage);
		setLoading(false);
	}
}

function createOnSubmit(props: AuthFormTemplateProps, setLoading) {
	const { onError } = props;

	return async (values, formik) => {
		try {
			setLoading(true);
			await callAction(props, values, formik, setLoading);
		} catch (err) {
			onError(err, values);
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
