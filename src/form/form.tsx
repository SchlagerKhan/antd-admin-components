import React from 'react';

import { FormContext } from 'react-hook-form';

import styled from 'styled-components';
import { BasicFormFieldProps, FormTextField } from './fields';

export interface FormFieldElement extends BasicFormFieldProps {
	comp?: any;
	value?: any;
}

export interface FormProps {
	form: any;
	fields?: FormFieldElement[];
	onSubmit: (values: any) => void;
	children?: any;
}

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

function renderFields(props: FormProps, field: FormFieldElement) {
	const { comp, ...fieldProps } = field;
	const { name } = fieldProps;

	const Field = comp || FormTextField;
	const key = name;

	return <Field key={key} {...fieldProps} />;
}

function renderChildren(props: FormProps) {
	const { fields, children } = props;

	return (
		<>
			{fields.map((field) => renderFields(props, field))}
			{children}
		</>
	);
}

export function Form(props: FormProps) {
	const { form, onSubmit, ...formProps } = props;
	const handleSubmit = form.handleSubmit(onSubmit);

	return (
		<FormContext {...form}>
			<StyledForm {...formProps} onSubmit={handleSubmit}>
				{renderChildren(props)}
			</StyledForm>
		</FormContext>
	);
}

Form.defaultProps = {
	fields: [],
};
