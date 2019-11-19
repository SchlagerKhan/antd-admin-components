import React from 'react';

import { BasicFormProps } from './types';
import { StyledForm, SubmitButton, ResetButton } from './components';
import { renderFields } from '../fields';

/* RENDERING */

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
	const { children, style, className, fields } = props;
	const formProps = { style, className };

	return (
		<StyledForm {...formProps}>
			{renderFields(fields)}
			{children}
			{renderButtons(props)}
		</StyledForm>
	);
}
