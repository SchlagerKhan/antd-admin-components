import React from 'react';

import { FormTextField } from '../fields';
import { FormFieldTemplateElement, BasicFormProps } from './types';
import { StyledForm, SubmitButton, ResetButton } from './components';

/* RENDERING */
function renderField(field: FormFieldTemplateElement) {
	const { comp, ...fieldProps } = field;
	const { name } = fieldProps;

	const FieldComp = comp || FormTextField;
	const key = `field-${name}`;

	return <FieldComp key={key} {...fieldProps} />;
}

function renderFields(props: BasicFormProps) {
	const { fields } = props;

	return fields.map(renderField);
}

function renderButtons(props: BasicFormProps) {
	const { withReset, withSubmit, submitText, submitLoading } = props;

	return (
		<>
			{withReset && <ResetButton>Reset</ResetButton>}
			{withSubmit && <SubmitButton loading={submitLoading}>{submitText}</SubmitButton>}
		</>
	);
}

export function renderContent(props: BasicFormProps) {
	const { children, style, className } = props;
	const formProps = { style, className };

	return (
		<StyledForm {...formProps}>
			{renderFields(props)}
			{children}
			{renderButtons(props)}
		</StyledForm>
	);
}
