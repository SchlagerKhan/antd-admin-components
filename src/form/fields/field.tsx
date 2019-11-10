import React from 'react';
import PropTypes from 'prop-types';

import { useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Error } from './error';

export interface FormFieldProps {
	name: string;
	label?: any;
	hideError?: boolean;
	children: any;
}

export interface BasicFormFieldProps {
	name: FormFieldProps['name'];
	label?: FormFieldProps['label'];
	placeholder?: string;
	registerOpts?: any;
	error?: any;
}

const Wrapper = styled.div`
	width: 100% !important;

	margin-bottom: 24px !important;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 2px;

	font-weight: bold;
`;

function renderLabel(label, name) {
	if (!label) {
		return null;
	}

	if (typeof label === 'string') {
		return <Label htmlFor={name}>{label}</Label>;
	}

	return label;
}

function renderError(props: FormFieldProps) {
	const { hideError, name } = props;

	if (hideError) {
		return null;
	}

	const { errors } = useFormContext();
	const error = errors[name];

	return <Error error={error} />;
}

export function FormField(props: FormFieldProps) {
	const { label, name, children, ...wrapperProps } = props;

	return (
		<Wrapper {...wrapperProps}>
			{renderLabel(label, name)}
			{children}
			{renderError(props)}
		</Wrapper>
	);
}
