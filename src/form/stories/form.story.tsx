import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, FormFieldTemplateElement } from '../form';
import { FormTextAreaField, FormNumberField } from '../fields';

import { Wrapper, Item, Title, onSubmit } from './helpers';

const FIELDS: FormFieldTemplateElement[] = [
	{
		name: 'text1',
		label: 'Text 1',
	},
	{
		name: 'text2',
		label: 'Text 2',
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
			extraText: Yup.string().required('Required'),
		}),
		onSubmit,
	});

	return (
		<Wrapper>
			<Item>
				<Title>Regular form</Title>
				<Form formik={formik} fields={FIELDS} withReset>
					<FormTextAreaField label='Text area (required)' name='extraText' />
				</Form>
			</Item>
		</Wrapper>
	);
}
