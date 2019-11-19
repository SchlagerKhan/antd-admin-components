import React from 'react';
import { useFormik } from 'formik';

import { Form } from '../form';
import { FormTextArrayField, FormObjectArrayField } from '../fields';

import { Wrapper, Item, Title, onSubmit } from './helpers.story';

const initialValues = {
	textArray: ['Test', 'Testing'],
	textAreaArray: ['Test', 'Testing'],
	objectArray: [{ name: 'Test', meta: 'Meta' }],
};

const objectProps = {
	label: 'Object array',
	name: 'objectArray',
	fields: [
		{
			name: 'name',
			label: 'Name',
		},
		{
			name: 'meta',
			label: 'Meta',
		},
	],
	itemHeader: (val) => val.name,
	defaultValue: {
		name: 'New name',
		meta: 'New meta',
	},
};

export function ArrayForm() {
	const formik = useFormik({ initialValues, onSubmit });
	const emptyFormik = useFormik({ initialValues: {}, onSubmit });

	return (
		<Wrapper>
			<Item>
				<Title>Array form</Title>
				<Form formik={formik} withReset>
					<FormTextArrayField label='Text array' name='textArray' />
					<FormTextArrayField label='TextArea array' name='textAreaArray' textarea />
					<FormObjectArrayField {...objectProps} />
				</Form>
			</Item>
			<Item>
				<Title>Empty array form</Title>
				<Form formik={emptyFormik} withReset>
					<FormTextArrayField label='Text array' name='noExistText' />
					<FormObjectArrayField {...objectProps} name='noExistObject' />
				</Form>
			</Item>
		</Wrapper>
	);
}
