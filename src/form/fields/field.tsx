import React from 'react';

import { useField } from 'formik';

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

	if (hideError) {
		return null;
	}

	const [_, { error }] = useField(name);

	return <Error error={error} />;
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
