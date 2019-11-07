import React, { useState } from 'react';
import useForm from 'react-hook-form';

import styled from 'styled-components';

import { Form } from '../form';
import { FormTextField } from '../fields';

import { Wrapper, Item, Title, SaveButton, createSubmit } from './helpers';

export function RegularForm() {
	const form = useForm();

	const { register } = form;
	const handleSubmit = createSubmit(form);

	form.setError('text2', 'Error', 'Error message');

	return (
		<Wrapper>
			<Item>
				<Title>Regular form</Title>
				<Form form={form} onSubmit={handleSubmit}>
					<FormTextField label='Text field 1' name='text1' />
					<FormTextField label='Text field 2' name='text2' error={form.errors.text2} />
					<FormTextField
						label='Text field 3 (required)'
						name='text3'
						error={form.errors.text3}
						register={register({ required: 'Required' })}
					/>

					<SaveButton></SaveButton>
				</Form>
			</Item>
		</Wrapper>
	);
}

export default { title: 'Form' };
