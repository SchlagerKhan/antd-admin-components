import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, InputNumber } from 'antd';
import { InputProps, TextAreaProps } from 'antd/lib/input';

import { FormField, BasicFormFieldProps } from './field';
import { InputNumberProps } from 'antd/lib/input-number';

type FormInputFieldProps = BasicFormFieldProps & {};

export function renderInput(props: FormInputFieldProps, Comp: any, getValFn: Function) {
	const { name, label, registerOpts, ...inputProps } = props;
	const { register, setValue } = useFormContext();

	register({ name }, registerOpts);
	const handleChange = (arg) => setValue(name, getValFn(arg));

	return (
		<FormField label={label} name={name}>
			<Comp name={name} {...inputProps} onChange={handleChange} />
		</FormField>
	);
}

const getTargetVal = (e) => e.target.value;
const identity = (i) => i;

/* TEXT */
export type FormTextFieldProps = FormInputFieldProps & InputProps & {};
export const FormTextField = (props: FormTextFieldProps) => renderInput(props, Input, getTargetVal);

/* TEXT AREA */
export type FormTextAreaFieldProps = FormInputFieldProps & TextAreaProps & {};
export const FormTextAreaField = (props: FormTextAreaFieldProps) => renderInput(props, Input.TextArea, getTargetVal);

/* NUMBER */
export type FormNumberFieldProps = FormInputFieldProps & InputNumberProps & {};
export const FormNumberField = (props: FormNumberFieldProps) => renderInput(props, InputNumber, identity);
