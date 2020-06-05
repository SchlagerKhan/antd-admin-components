import React from 'react';

import { useField, useFormikContext } from 'formik';
import { Icon, Modal } from 'antd';

import styled from 'styled-components';

import { Error } from './error';
import { FormFieldProps } from './types';

/** COMPONENTS */
const Wrapper = styled.div`
	width: 100% !important;

	&:not(:last-child) {
		margin-bottom: 24px !important;
	}
`;

export const FormFieldLabel = styled.label`
	display: block;
	margin-bottom: 2px;

	font-weight: bold;
`;

const InstructionIcon = styled(Icon).attrs({
	type: 'question-circle',
})`
	margin-left: 8px;
`;

/* RENDERING */
function renderLabel(props: FormFieldProps) {
	const { name, label, instructions } = props;

	function openInstructions() {
		Modal.info({ width: 800, title: label, content: instructions });
	}

	if (!label) {
		return null;
	}

	if (typeof label === 'string') {
		return (
			<FormFieldLabel htmlFor={name}>
				{label}
				{instructions && <InstructionIcon onClick={openInstructions} />}
			</FormFieldLabel>
		);
	}

	return label;
}

function renderError(props: FormFieldProps, submitCount: number) {
	const { hideError, name } = props;

	const [_, { touched, error }] = useField(name); // eslint-disable-line
	const forceError = submitCount > 0 || touched;

	if (!hideError && forceError) {
		return <Error error={error} />;
	}

	return null;
}

export function FormField(props: FormFieldProps) {
	const { children } = props;
	const { submitCount } = useFormikContext();

	return (
		<Wrapper>
			{renderLabel(props)}
			{children}
			{renderError(props, submitCount)}
		</Wrapper>
	);
}
