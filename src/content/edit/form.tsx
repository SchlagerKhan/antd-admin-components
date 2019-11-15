import React from 'react';

import { useParams } from 'react-router-dom';
import { useAsyncCall } from 'use-call';

import { useFormik, FormikConfig } from 'formik';
import { Skeleton } from 'antd';

import { Form, FormProps } from '../../form';

export interface EditContentFormProps {
	fields: FormProps['fields'];
	fetchData: (variables: any) => Promise<any>;
	onSave: FormikConfig<any>['onSubmit'];
}

export function EditContentForm(props: EditContentFormProps) {
	const { fields, fetchData, onSave } = props;

	const { alias } = useParams();
	const [data, _, loading] = useAsyncCall(fetchData, { alias });
	const formik = useFormik({ initialValues: data, onSubmit: onSave, enableReinitialize: true });

	if (loading) {
		return <Skeleton />;
	}

	return <Form formik={formik} fields={fields} withReset />;
}
