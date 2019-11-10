import React from 'react';

import { FormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Button } from 'antd';

import { FormTextField, FormTextFieldProps, FormTextAreaFieldProps, FormNumberFieldProps } from './fields';

export type FormFieldTemplateElement = {
	comp?: any;
	value?: any;
	defaultValue?: any;
} & (FormTextFieldProps | FormTextAreaFieldProps | FormNumberFieldProps);

export interface FormProps {
	form: any;
	fields?: FormFieldTemplateElement[];
	saveButton?: any;
	onSubmit?: (values: any) => void;
	children?: any;
}

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const DefaultSaveButton = styled(Button).attrs({
	htmlType: 'submit',
	children: 'Save',
})``;

function renderFields(props: FormProps, field: FormFieldTemplateElement) {
	const { comp, ...fieldProps } = field;
	const { name } = fieldProps;

	const Field = comp || FormTextField;
	const key = name;

	return <Field key={key} {...fieldProps} />;
}

function renderChildren(props: FormProps) {
	const { fields, children } = props;

	return (
		<>
			{fields.map((field) => renderFields(props, field))}
			{children}
		</>
	);
}

function renderSaveButton(props: FormProps) {
	const { saveButton, onSubmit } = props;

	return onSubmit && saveButton;
}

export function Form(props: FormProps) {
	const { form, onSubmit, saveButton, ...formProps } = props;
	const handleSubmit = form.handleSubmit(onSubmit);

	return (
		<FormContext {...form}>
			<StyledForm {...formProps} onSubmit={handleSubmit}>
				{renderChildren(props)}
				{renderSaveButton(props)}
			</StyledForm>
		</FormContext>
	);
}

Form.defaultProps = {
	fields: [],
	saveButton: <DefaultSaveButton />,
};
