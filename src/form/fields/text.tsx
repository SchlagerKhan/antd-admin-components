import { omit } from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';

import { FormField, BasicFieldPropTypes } from './field';
import { getRegister } from './helpers';
import { Error } from './error';

export function FormTextField(props) {
	const { label, error, ...restProps } = props;
	const inputProps = omit(restProps, ['register']);
	const register = getRegister(props);

	const inputRef = (ref) => ref && register(ref.input);

	return (
		<FormField label={label} name={name}>
			<Input ref={inputRef} {...inputProps} />
			<Error error={error} />
		</FormField>
	);
}

FormTextField.propTypes = {
	...BasicFieldPropTypes,
	...Input.propTypes,
	placeholder: PropTypes.string,
};
