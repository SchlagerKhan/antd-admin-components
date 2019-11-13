import React from 'react';

import { Form as FormikForm, FormikProvider, FormikProps } from 'formik';

import styled from 'styled-components';

import { Button } from 'antd';

import { FormTextField, FormTextFieldProps, FormTextAreaFieldProps, FormNumberFieldProps } from './fields';

/* TYPES */
export type FormFieldTemplateElement = {
	comp?: any;
	value?: any;
	defaultValue?: any;
} & (FormTextFieldProps | FormTextAreaFieldProps | FormNumberFieldProps);

export interface FormProps extends Partial<HTMLFormElement> {
	formik: FormikProps<any>;
	fields?: FormFieldTemplateElement[];
	withReset?: boolean;
	withSubmit?: boolean;
	submitText?: any;
	submitLoading?: boolean;
	children?: any;
}

/* COMPONENTS */
const StyledForm = styled(FormikForm)`
	display: flex;
	flex-direction: column;
`;

const ResetButton = styled(Button).attrs({
	type: 'default',
	htmlType: 'reset',
})`
	margin-bottom: 6px;
`;

export const SubmitButton = styled(Button).attrs({
	htmlType: 'submit',
})``;

/* RENDERING */
function renderField(field: FormFieldTemplateElement) {
	const { comp, ...fieldProps } = field;
	const { name } = fieldProps;

	const FieldComp = comp || FormTextField;
	const key = `field-${name}`;

	return <FieldComp key={key} {...fieldProps} />;
}

function renderFields(props: FormProps) {
	const { fields } = props;

	return fields.map(renderField);
}

function renderButtons(props: FormProps) {
	const { withReset, withSubmit, submitText, submitLoading } = props;

	return (
		<>
			{withReset && <ResetButton>Reset</ResetButton>}
			{withSubmit && <SubmitButton loading={submitLoading}>{submitText}</SubmitButton>}
		</>
	);
}

export function Form(props: FormProps) {
	const { formik, children, style, className } = props;
	const formProps = { style, className };

	return (
		<FormikProvider value={formik}>
			<StyledForm {...formProps}>
				{renderFields(props)}
				{children}
				{renderButtons(props)}
			</StyledForm>
		</FormikProvider>
	);
}

Form.defaultProps = {
	fields: [],
	withSubmit: true,
	submitText: 'Save',
};
