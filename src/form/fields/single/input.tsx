import React from 'react';

import styled from 'styled-components';

import {
	Input,
	InputNumber,
	PasswordProps,
	InputProps,
	TextAreaProps,
	InputNumberProps,
	SwitchProps,
	Switch,
	CheckboxProps,
	Checkbox,
} from 'formik-antd';

import { Select, SelectProps } from '../../../input';
import { FormField, BasicFormFieldProps } from './field';

const StyledInputNumber = styled(InputNumber)`
	min-width: 200px;
`;

type FormInputFieldProps = BasicFormFieldProps & InputProps & {};

function renderInput(props: FormInputFieldProps, InputComp: any) {
	const { name, label } = props;

	return (
		<FormField name={name} label={label}>
			<InputComp {...props} />
		</FormField>
	);
}

/* TEXT */
export type FormTextFieldProps = FormInputFieldProps & InputProps;
export const FormTextField = (props: FormTextFieldProps) => renderInput(props, Input);

/* PASSWORD */
export type FormPasswordFieldProps = FormInputFieldProps & PasswordProps;
export const FormPasswordProps = (props: FormPasswordFieldProps) => renderInput(props, Input);

/* TEXT AREA */
export type FormTextAreaFieldProps = FormInputFieldProps & TextAreaProps;
export const FormTextAreaField = (props: FormTextAreaFieldProps) => renderInput(props, Input.TextArea);

/* NUMBER */
export type FormNumberFieldProps = InputNumberProps & InputProps;
export const FormNumberField = (props: FormNumberFieldProps) => renderInput(props, StyledInputNumber);

/* SWITCH */
export type FormSwitchFieldProps = FormInputFieldProps & SwitchProps;
export const FormSwitchField = (props: FormSwitchFieldProps) => renderInput(props, Switch);

/* SELECT */
export type FormSelectFieldProps = FormInputFieldProps & SelectProps;
export const FormSelectField = (props: FormSelectFieldProps) => renderInput(props, Select);

/* CHECKBOX */
export type FormCheckboxFieldProps = FormInputFieldProps & CheckboxProps;
export const FormCheckboxField = (props: FormCheckboxFieldProps) => renderInput(props, Checkbox);
