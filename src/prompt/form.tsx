import { noop } from 'lodash';

import React from 'react';
import useForm from 'react-hook-form';

import { Form, FormFieldTemplateElement } from '../form';

import { usePrompt, BasePromptOpts } from './prompt';

function getDefaultValues(fields: FormFieldTemplateElement[]) {
	return fields.reduce((sum, field) => {
		sum[field.name] = field.defaultValue;
		return sum;
	}, {});
}

function createOnOk(opts, form) {
	const { onOk = noop } = opts;

	return () => onOk(form.getValues());
}

function createPrompt(promptState, form, defaultValues) {
	const { prompt } = promptState;

	return async () => {
		const isOk = await prompt();
		const values = isOk ? form.getValues() : null;

		form.reset(defaultValues);

		return values;
	};
}

/* RENDERING */
export function useFormPrompt(fields: FormFieldTemplateElement[], opts: BasePromptOpts) {
	const defaultValues = getDefaultValues(fields);
	const form = useForm({ defaultValues });

	return null;

	// const onOk = createOnOk(opts, form);
	// const children = <Form form={form} fields={fields} />;
	// const promptState = usePrompt({ ...opts, onOk, children });

	// const prompt = createPrompt(promptState, form, defaultValues);
	// const { content } = promptState;

	// return { prompt, content };
}
