import React from 'react';
import { useFormik, FieldInputProps } from 'formik';

import { Form } from '../form';
import { FormTextArrayField, FormObjectArrayField } from '../fields';
import { ArrayItemProps } from '../fields/array/helpers';

import { Wrapper, Item, Title, onSubmit } from './helpers';

function renderElement(props: ArrayItemProps) {
	const { value } = props.field;

	return <p>{value.name + ' ' + value.meta}</p>;
}

export function ArrayForm() {
	const initialValues = { textArray: ['Test', 'Testing'], objectArray: [{ name: 'Test', meta: 'Meta' }] };
	const formik = useFormik({ initialValues, onSubmit });

	const defaultObject = {
		name: 'New name',
		meta: 'New meta',
	};

	return (
		<Wrapper>
			<Item>
				<Title>Array form</Title>
				<Form formik={formik} withReset>
					<FormTextArrayField label='Text array' name='textArray' />
					<FormObjectArrayField label='Object array' name='objectArray' renderElement={renderElement} defaultValue={defaultObject} />
				</Form>
			</Item>
		</Wrapper>
	);
}
