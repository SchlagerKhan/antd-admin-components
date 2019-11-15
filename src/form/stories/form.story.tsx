import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, FormFieldTemplateElement } from '../form';
import { FormTextAreaField, FormNumberField } from '../fields';

import { Wrapper, Item, Title, onSubmit } from './helpers.story';

const FIELDS: FormFieldTemplateElement[] = [
	{
		name: 'text',
		label: 'Text',
	},
	{
		name: 'email',
		label: 'Email',
	},
	{
		name: 'num1',
		label: 'Number 1',
		comp: FormNumberField,
	},
];

export function RegularForm() {
	const formik = useFormik({
		initialValues: {},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Invalid email')
				.required('Required'),
			extra: Yup.string().required('Required'),
		}),
		onSubmit,
	});

	return (
		<Wrapper>
			<Item>
				<Title>Regular form</Title>
				<Form formik={formik} fields={FIELDS} withReset>
					<FormTextAreaField label='Text area (required)' name='extra' />
				</Form>
			</Item>
		</Wrapper>
	);
}
