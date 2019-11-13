import { noop } from 'lodash';

import React from 'react';
import { useFormik } from 'formik';

import { Form, FormFieldTemplateElement } from '../form';

import { usePrompt, BasePromptOpts } from './prompt';

function getDefaultValues(fields: FormFieldTemplateElement[]) {
	return fields.reduce((sum, field) => {
		sum[field.name] = field.defaultValue;
		return sum;
	}, {});
}

function createOnOk(opts, formik) {
	const { onOk = noop } = opts;

	return () => onOk(formik.values);
}

function createPrompt(promptState, formik) {
	const { prompt } = promptState;

	return async () => {
		const isOk = await prompt();
		const values = isOk ? formik.values : null;

		formik.resetForm();

		return values;
	};
}

/* RENDERING */
export function useFormPrompt(fields: FormFieldTemplateElement[], opts: BasePromptOpts) {
	const initialValues = getDefaultValues(fields);
	const formik = useFormik({ initialValues, onSubmit: null });

	const onOk = createOnOk(opts, formik);
	const children = <Form formik={formik} fields={fields} withSubmit={false} />;
	const promptState = usePrompt({ ...opts, onOk, children });

	const prompt = createPrompt(promptState, formik);
	const { content } = promptState;

	return { prompt, content };
}
