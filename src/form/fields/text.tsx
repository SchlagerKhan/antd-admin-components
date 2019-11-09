import React from 'react';

import { useFormContext } from 'react-hook-form';

import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import { FormField, BasicFormFieldProps } from './field';
import { withRegister } from './helpers';

type FormTextFieldProps = InputProps & BasicFormFieldProps & {};

export function render(props: FormTextFieldProps) {
	const { name, label, register, ...inputProps } = props;

	const { errors } = useFormContext();
	const error = errors[name];

	const inputRef = (ref) => ref && register(ref.input);

	return (
		<FormField label={label} name={name}>
			<Input ref={inputRef} name={name} {...inputProps} />
		</FormField>
	);
}

export const FormTextField = withRegister<FormTextFieldProps>(render);
