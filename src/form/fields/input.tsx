import React from 'react';

import { Input, InputNumber, PasswordProps, InputProps, TextAreaProps, InputNumberProps } from 'formik-antd';

import { FormField, BasicFormFieldProps } from './field';

type FormInputFieldProps = BasicFormFieldProps & InputProps & {};

function renderInput(props: FormInputFieldProps, InputComp: React.ComponentType) {
	const { name, label } = props;

	return (
		<FormField name={name} label={label}>
			<InputComp {...props} />
		</FormField>
	);
}

/* TEXT */
export type FormTextFieldProps = FormInputFieldProps & InputProps & {};
export const FormTextField = (props: FormTextFieldProps) => renderInput(props, Input);

export type FormPasswordFieldProps = FormInputFieldProps & PasswordProps & {};
export const FormPasswordProps = (props: FormPasswordFieldProps) => renderInput(props, Input);

/* TEXT AREA */
export type FormTextAreaFieldProps = FormInputFieldProps & TextAreaProps & {};
export const FormTextAreaField = (props: FormTextAreaFieldProps) => renderInput(props, Input.TextArea);

/* NUMBER */
export type FormNumberFieldProps = InputNumberProps & InputProps & {};
export const FormNumberField = (props: FormNumberFieldProps) => renderInput(props, InputNumber);
