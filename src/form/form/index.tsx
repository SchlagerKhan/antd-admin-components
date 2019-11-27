import React from 'react';

import { FormikProvider, useFormik } from 'formik';

import { FormProps } from './types';
import { renderContent } from './content';

export * from './types';

function useSafeFormik(props: FormProps) {
	const { formik, formikConfig } = props;

	const fallbackFormik = useFormik(formikConfig);
	return formik || fallbackFormik;
}

function initFormikRef(props, formik) {
	// This is an ugly hack created explicitly for formPrompt.
	// Will revisit this when antd@4 is released and hopefully have better form handling

	props.formikRef.formik = formik;
}

export function Form(props: FormProps) {
	const formik = useSafeFormik(props);

	initFormikRef(props, formik);

	return (
		// prettier-ignore
		<FormikProvider value={formik}>
			{renderContent(props)}
		</FormikProvider>
	);
}

Form.defaultProps = {
	fields: [],
	formikRef: {},
	formikConfig: {},
	withSubmit: true,
	submitText: 'Save',
};
