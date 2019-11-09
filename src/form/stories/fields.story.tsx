import React, { useState } from 'react';
import useForm from 'react-hook-form';

import { Form, FormFieldElement } from '../form';

import { Wrapper, Item, Title, SaveButton, createSubmit } from './helpers';

const FIELDS: FormFieldElement[] = [
	{
		name: 'text1',
		label: 'Text 1',
	},
	{
		name: 'text2',
		label: 'Text 2',
	},
];

export function FormsWithFields() {
	const form = useForm();
	const handleSubmit = createSubmit(form);

	form.setError('text2', 'Error', 'Error message');

	return (
		<Wrapper>
			<Item>
				<Title>Regular form</Title>
				<Form form={form} fields={FIELDS} onSubmit={handleSubmit}>
					<SaveButton></SaveButton>
				</Form>
			</Item>
		</Wrapper>
	);
}
