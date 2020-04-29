import React, { useCallback } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import useAsyncCall from 'use-async-call';

import { useFormik, FormikConfig } from 'formik';
import { Skeleton, PageHeader as AntPageHeader, Button, message } from 'antd';

import styled from 'styled-components';

import { Form, FormProps } from '../../form';

export interface EditContentFormProps {
	title: string;
	fields: FormProps['fields'];
	fetchData: (variables: any) => Promise<any>;
	onSave: FormikConfig<any>['onSubmit'];

	WrapperComponent?: React.ElementType;
}

const PageHeader = styled(AntPageHeader)`
	padding-bottom: 56px !important;
	margin-bottom: 56px !important;
`;

function getExtra(formik) {
	const onReset = () => formik.resetForm();
	const onSubmit = () => formik.submitForm();

	return [
		<Button key='reset' ghost onClick={onReset}>
			Reset
		</Button>,
		<Button key='submit' onClick={onSubmit}>
			Save
		</Button>,
	];
}

function createOnSubmit(onSave) {
	return async (values) => {
		try {
			await onSave(values);
			message.success('Saved');
		} catch (err) {
			message.error('Error in saving');
		}
	};
}

function LoadedContent(props) {
	const { data, refresh, title, fields, onSave, WrapperComponent } = props;
	const onSubmit = createOnSubmit(onSave);

	const history = useHistory();
	const formik = useFormik({ initialValues: data, onSubmit, enableReinitialize: true });

	const formProps = {
		formik,
		fields,
		withReset: false,
		withSubmit: false,
	};

	const headerProps = {
		title,
		ghost: false,
		onBack: () => history.goBack(),
		extra: getExtra(formik),
	};

	return (
		<WrapperComponent data={data} refresh={refresh}>
			<PageHeader {...headerProps}>
				<Form {...formProps} />
			</PageHeader>
		</WrapperComponent>
	);
}

export function EditContentForm(props: EditContentFormProps) {
	const { fetchData } = props;

	const { alias } = useParams();
	const callFn = useCallback(() => fetchData({ alias }), [alias]);
	const [state, { refresh }] = useAsyncCall(callFn);
	const { data, loading } = state;

	if (loading) {
		return <Skeleton />;
	}

	if (!data) {
		return <p>No content</p>;
	}

	// return null;

	const contentProps = { data, refresh, ...props };
	return <LoadedContent {...contentProps} />;
}

EditContentForm.defaultProps = {
	WrapperComponent: ({ children }) => children,
	renderExtra: () => null,
};
