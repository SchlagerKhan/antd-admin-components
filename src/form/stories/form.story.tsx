import React, { useState } from 'react';
import useForm from 'react-hook-form';

import { Form, FormFieldElement } from '../form';
import { FormTextField } from '../fields';

import { Wrapper, Item, Title, SaveButton, onSubmit } from './helpers';

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

export function RegularForm() {
	const form = useForm();

	form.setError('text2', 'Error', 'Error message');

	return (
		<Wrapper>
			<Item>
				<Title>Regular form</Title>
				<Form form={form} fields={FIELDS} onSubmit={onSubmit}>
					<FormTextField label='Extra text (required)' name='extraText' registerOpts={{ required: 'Required' }} />

					<SaveButton />
				</Form>
			</Item>
		</Wrapper>
	);
}
