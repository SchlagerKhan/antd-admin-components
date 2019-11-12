import { cloneDeep } from 'lodash';

import React from 'react';
import { FieldArray, ArrayHelpers, Field, FieldProps } from 'formik';

import styled from 'styled-components';

import { Button } from 'antd';

import { FormField } from '../field';
import { FormArrayFieldProps, useFieldProps, FormArrayRenderItemOpts } from './helpers';

/* COMPONENTS */
const Wrapper = styled.div`
	margin-bottom: 6px;
`;

const AddButton = styled(Button).attrs({
	icon: 'plus',
	children: 'Add',
	htmlType: 'button',
})``;

/* RENDERING */
function defaultRenderItem(opts: FormArrayRenderItemOpts) {
	const { name, index, ItemComp, helpers } = opts;

	const fieldProps = {
		key: `${name}-${index}`,
		name: `${name}.${index}`,
		index,
		onRemove: () => helpers.remove(index),
		component: ItemComp,
	};

	return <Field {...fieldProps} />;
}

function defaultRenderItems(props: FormArrayFieldProps, fieldProps: FieldProps, helpers: ArrayHelpers) {
	const { name, ItemComp, renderItem } = props;

	return fieldProps.field.value.map((value, index) => {
		const opts = { name, index, ItemComp, helpers };
		return renderItem(opts);
	});
}

function renderFieldArray(props: FormArrayFieldProps, fieldProps: FieldProps, helpers: ArrayHelpers) {
	const { renderItems, defaultValue } = props;
	const items = renderItems(props, fieldProps, helpers);

	const addItem = () => {
		const newItem = cloneDeep(defaultValue);
		helpers.push(newItem);
	};

	return (
		<>
			<Wrapper>{items}</Wrapper>
			<AddButton onClick={addItem} />
		</>
	);
}

export function FormArrayField(props: FormArrayFieldProps) {
	const { name, label } = props;
	const fieldProps = useFieldProps(name);
	const renderArray = (helpers) => renderFieldArray(props, fieldProps, helpers);

	return (
		<FormField label={label} name={name}>
			<FieldArray name={name} render={renderArray} />
		</FormField>
	);
}

FormArrayField.defaultProps = {
	renderItem: defaultRenderItem,
	renderItems: defaultRenderItems,
};
