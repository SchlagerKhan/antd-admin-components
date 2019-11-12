import React from 'react';
import { useField } from 'formik';

import { Input } from 'antd';
import { InputProps, TextAreaProps } from 'antd/lib/input';

import { FormField, BasicFormFieldProps } from './field';

type FormInputFieldProps = BasicFormFieldProps & InputProps & {};

function renderInput(props: FormInputFieldProps, InputComp: React.ComponentType) {
	const { name, label, ...restProps } = props;
	const [field] = useField(name);

	const inputProps = Object.assign({}, field, restProps);

	return (
		<FormField label={label} name={name}>
			<InputComp {...inputProps} />
		</FormField>
	);
}

/* TEXT */
export type FormTextFieldProps = FormInputFieldProps & InputProps & {};
export const FormTextField = (props: FormTextFieldProps) => renderInput(props, Input);

/* TEXT AREA */
export type FormTextAreaFieldProps = FormInputFieldProps & TextAreaProps & {};
export const FormTextAreaField = (props: FormTextAreaFieldProps) => renderInput(props, Input.TextArea);

/* NUMBER */
export type FormNumberFieldProps = FormInputFieldProps & InputProps & {};
export const FormNumberField = (props: FormNumberFieldProps) => renderInput({ ...props, type: 'number' }, Input);
