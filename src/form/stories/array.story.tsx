import React from 'react';
import { useFormik } from 'formik';

import { Form } from '../form';
import { FormTextArrayField, FormObjectArrayField, FormTextField } from '../fields';
import { ArrayItemProps } from '../fields/array/helpers';

import { Wrapper, Item, Title, onSubmit } from './helpers';

function ObjectItem(props: ArrayItemProps) {
	const { name } = props.field;

	return (
		<>
			<FormTextField label='Name' name={`${name}.name`} />
			<FormTextField label='Meta' name={`${name}.meta`} />
		</>
	);
}

export function ArrayForm() {
	const initialValues = {
		textArray: ['Test', 'Testing'],
		objectArray: [{ name: 'Test', meta: 'Meta' }],
	};
	const formik = useFormik({ initialValues, onSubmit });

	const objectProps = {
		label: 'Object array',
		name: 'objectArray',
		item: ObjectItem,
		itemHeader: (val) => val.name,
		defaultValue: {
			name: 'New name',
			meta: 'New meta',
		},
	};

	return (
		<Wrapper>
			<Item>
				<Title>Array form</Title>
				<Form formik={formik} withReset>
					<FormTextArrayField label='Text array' name='textArray' />
					<FormObjectArrayField {...objectProps} />
				</Form>
			</Item>
		</Wrapper>
	);
}
