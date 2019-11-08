import { omit } from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import { useFormContext } from 'react-hook-form';

import { Input } from 'antd';

import { FormField, BasicFieldPropTypes } from './field';
import { withRegister } from './helpers';
import { Error } from './error';

export function render(props) {
	const { name, label, register, ...inputProps } = props;

	const { errors } = useFormContext();
	const error = errors[name];

	const inputRef = (ref) => ref && register(ref.input);

	return (
		<FormField label={label} name={name}>
			<Input ref={inputRef} name={name} {...inputProps} />
			<Error error={error} />
		</FormField>
	);
}

export const FormTextField = withRegister(render);

// @ts-ignore
FormTextField.propTypes = {
	name: PropTypes.string.isRequired,
	...BasicFieldPropTypes,
	...Input.propTypes,
	placeholder: PropTypes.string,
};
