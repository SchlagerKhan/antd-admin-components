import { noop } from 'lodash';

import React from 'react';

import { Form, FormFieldTemplateElement } from '../form';
import { BasicPromptOpts, prompt, PromptOpts } from './prompt';

function getDefaultValues(fields: FormFieldTemplateElement[]) {
	return fields.reduce((sum, field) => {
		sum[field.name] = field.defaultValue;
		return sum;
	}, {});
}

function createOnOk(opts, formikRef) {
	const { onOk = noop } = opts;

	return () => {
		const { values } = formikRef.formik;

		return onOk(values);
	};
}

async function doPrompt(opts: PromptOpts, formikRef) {
	const isOk = await prompt(opts);
	const { values } = formikRef.formik;

	return isOk ? values : null;
}

/* RENDERING */
export function formPrompt(fields: FormFieldTemplateElement[], opts: BasicPromptOpts) {
	const formikRef = {};
	const formProps = {
		fields,
		formikRef,
		formikConfig: {
			initialValues: getDefaultValues(fields),
			onSubmit: null,
		},
		withSubmit: false,
	};
	const content = <Form {...formProps} />;

	console.log(formikRef);

	const onOk = createOnOk(opts, formikRef);

	const promptOpts = { ...opts, onOk, content };
	return doPrompt(promptOpts, formikRef);
}
