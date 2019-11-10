import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, InputNumber } from 'antd';
import { InputProps, TextAreaProps } from 'antd/lib/input';

import { FormField, BasicFormFieldProps } from './field';
import { InputNumberProps } from 'antd/lib/input-number';

type FormInputFieldProps = BasicFormFieldProps & {};

export function renderInput(props: FormInputFieldProps, Comp: any) {
	const { name, label, registerOpts, ...inputProps } = props;
	const { register } = useFormContext();

	const inputRef = (ref) => ref && register(ref.input, registerOpts);

	return (
		<FormField label={label} name={name}>
			<Comp ref={inputRef} name={name} {...inputProps} />
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
export type FormNumberFieldProps = FormInputFieldProps & InputNumberProps & {};
export const FormNumberField = (props: FormNumberFieldProps) => renderInput(props, InputNumber);
