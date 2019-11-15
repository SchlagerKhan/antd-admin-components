import React from 'react';

import { useField, useFormikContext } from 'formik';

import styled from 'styled-components';

import { Error } from './error';

/** TYPES */
export interface FormFieldProps {
	name: string;
	label?: any;
	hideError?: boolean;
	children: any;
}

export interface BasicFormFieldProps {
	name: FormFieldProps['name'];
	label?: FormFieldProps['label'];
}

/** COMPONENTS */
const Wrapper = styled.div`
	width: 100% !important;

	margin-bottom: 24px !important;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 2px;

	font-weight: bold;
`;

/* RENDERING */
function renderLabel(props: FormFieldProps) {
	const { name, label } = props;

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

	const [_, { touched, error }] = useField(name);
	const { submitCount } = useFormikContext();
	const forceError = submitCount > 0 || touched;

	if (!hideError && forceError) {
		return <Error error={error} />;
	}

	return null;
}

export function FormField(props: FormFieldProps) {
	const { children } = props;

	return (
		<Wrapper>
			{renderLabel(props)}
			{children}
			{renderError(props)}
		</Wrapper>
	);
}
