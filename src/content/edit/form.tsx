import React, { useCallback } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import useAsyncCall from 'use-async-call';

import { useFormik, FormikConfig } from 'formik';
import { PageHeader as AntPageHeader, message, Spin } from 'antd';

import styled from 'styled-components';

import { LoadingButton } from '../../components';
import { Form, FormProps } from '../../form';

interface FieldFnOpts {
	formik: ReturnType<typeof useFormik>;
}

type FormFields = FormProps['fields'];
type FormFieldsFn = (opts: FieldFnOpts) => FormFields;

export interface EditContentFormProps {
	title: string;
	fields: FormFields | FormFieldsFn;
	fetchData: (variables: any) => Promise<any>;
	onSave: FormikConfig<any>['onSubmit'];

	WrapperComponent?: React.ElementType;
}

interface LoadedContentProps extends EditContentFormProps {
	data: any[];
	refresh: Function;
}

const PageHeader = styled(AntPageHeader)`
	padding-bottom: 56px !important;
	margin-bottom: 56px !important;
`;

function getExtra(formik) {
	const onReset = () => formik.resetForm();
	const onSubmit = () => formik.submitForm();

	return (
		<>
			<LoadingButton ghost onClick={onReset}>
				Reset
			</LoadingButton>
			<LoadingButton key='submit' onClick={onSubmit}>
				Save
			</LoadingButton>
		</>
	);
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

function LoadedContent(props: LoadedContentProps) {
	const { data, refresh, title, fields: $fields, onSave, WrapperComponent } = props;
	const onSubmit = createOnSubmit(onSave);

	const history = useHistory();
	const formik = useFormik({ initialValues: data, onSubmit, enableReinitialize: true });

	const fieldsIsFn = typeof $fields === 'function';
	// @ts-ignore
	const fields = (fieldsIsFn ? $fields({ formik }) : $fields) as FormFields;

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
	const callFn = useCallback(() => fetchData({ alias }), [fetchData, alias]);
	const [state, { refresh }] = useAsyncCall(callFn);
	const { data, loading } = state;

	if (loading) {
		return <Spin spinning />;
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
