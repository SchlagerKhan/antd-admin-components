import React, { useState } from 'react';
import useForm from 'react-hook-form';

import { Button } from 'antd';

import { Form } from '../form';
import { FormTextArrayField, FormObjectArrayField } from '../fields';

import { Wrapper, Item, Title, onSubmit } from './helpers';

function renderElement(val) {
	return <p>{val.text + ' ' + val.meta}</p>;
}

export function ArrayForm() {
	const defaultValues = { textArray: ['Test', 'Testing'] };
	const form = useForm({ defaultValues });

	function reset() {
		form.reset(defaultValues);
	}

	return (
		<Wrapper>
			<Item>
				<Title>Array form</Title>
				<Form form={form} onSubmit={onSubmit} onReset={reset}>
					<FormTextArrayField label='Text array' name='textArray' />
					{/* <FormObjectArrayField label='Object array' name='objectArray' renderElement={renderElement} /> */}
				</Form>
			</Item>
		</Wrapper>
	);
}
