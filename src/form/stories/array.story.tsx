import React, { useState } from 'react';
import useForm from 'react-hook-form';

import { Form } from '../form';
import { FormTextArrayField, FormObjectArrayField } from '../fields';

import { Wrapper, Item, Title, SaveButton, onSubmit } from './helpers';

export function ArrayForm() {
	const form = useForm();

	const [textArray, setTextArray] = useState(['Element 1']);
	const [objArray, setObjArray] = useState([
		{
			text: 'Text',
			meta: 'Meta',
		},
	]);

	function handleTextAdd() {
		console.log('Add');
	}
	function handleTextRemove() {
		console.log('Remove');
	}

	return (
		<Wrapper>
			<Item>
				<Title>Array form</Title>
				<Form form={form} onSubmit={onSubmit}>
					<FormTextArrayField label='Text array' name='text_array' values={textArray} onAdd={handleTextAdd} onRemove={handleTextRemove} />
					<FormObjectArrayField
						label='Object array'
						name='object_array'
						values={objArray}
						onAdd={handleTextAdd}
						onRemove={handleTextRemove}
						renderElement={(val) => <p>{val.text + ' ' + val.meta}</p>}
					/>

					<SaveButton />
				</Form>
			</Item>
		</Wrapper>
	);
}
