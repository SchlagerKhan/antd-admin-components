import React from 'react';
import useForm from 'react-hook-form';

import { Form, FormFieldTemplateElement } from '../form';
import { FormNumberField, FormTextAreaField } from '../fields';

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
	const form = useForm();

	form.setError('text2', 'Error', 'Error message');

	return (
		<Wrapper>
			<Item>
				<Title>Regular form</Title>
				<Form form={form} fields={FIELDS} onSubmit={onSubmit}>
					<FormTextAreaField label='Text area (required)' name='extraText' registerOpts={{ required: 'Required' }} />
				</Form>
			</Item>
		</Wrapper>
	);
}
