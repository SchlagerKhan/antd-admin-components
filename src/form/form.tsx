import React from 'react';

import { FormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Button } from 'antd';

import { FormTextField, FormTextFieldProps, FormTextAreaFieldProps, FormNumberFieldProps } from './fields';

/* TYPES */
export type FormFieldTemplateElement = {
	comp?: any;
	value?: any;
	defaultValue?: any;
} & (FormTextFieldProps | FormTextAreaFieldProps | FormNumberFieldProps);

export interface FormProps {
	form: any;
	fields?: FormFieldTemplateElement[];
	defaultValues?: any;
	onReset?: () => void;
	submitText?: any;
	onSubmit?: (values: any) => void;
	children?: any;
}

/* COMPONENTS */
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const ResetButton = styled(Button).attrs({
	type: 'default',
	htmlType: 'button',
})`
	margin-bottom: 6px;
`;

export const SubmitButton = styled(Button).attrs({
	htmlType: 'submit',
})``;

/* RENDERING */
function renderField(props: FormProps, field: FormFieldTemplateElement) {
	const { comp, ...fieldProps } = field;
	const { name } = fieldProps;

	const Field = comp || FormTextField;
	const key = name;

	return <Field key={key} {...fieldProps} />;
}

function renderFields(props: FormProps) {
	const { fields } = props;

	return fields.map((field) => renderField(props, field));
}

function renderButtons(props: FormProps) {
	const { submitText, onSubmit, onReset } = props;

	return (
		<>
			{onReset && <ResetButton onClick={onReset}>Reset</ResetButton>}
			{onSubmit && <SubmitButton>{submitText}</SubmitButton>}
		</>
	);
}

export function Form(props: FormProps) {
	const { form, onSubmit, children, ...formProps } = props;
	const handleSubmit = form.handleSubmit(onSubmit);

	return (
		<FormContext {...form}>
			<StyledForm {...formProps} onSubmit={handleSubmit}>
				{renderFields(props)}
				{children}
				{renderButtons(props)}
			</StyledForm>
		</FormContext>
	);
}

Form.defaultProps = {
	fields: [],
	submitText: 'Save',
};
