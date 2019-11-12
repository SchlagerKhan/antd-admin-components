import { times } from 'lodash';

import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Button } from 'antd';

import { FormField, BasicFormFieldProps } from '../field';

export interface FormArrayFieldProps {
	name: string;
	label?: string;
	wrapperComp?: any;
	ItemComp: any;
}

export interface BasicFormArrayFieldProps extends BasicFormFieldProps {}

/* HELPERS */
const itemsToIndices = (items) => items.map((_, i) => i);

function useArrayItems(props: FormArrayFieldProps) {
	const { name } = props;
	const { watch } = useFormContext();

	const items = watch(name) || [];
	const [counter, setCounter] = useState(items.length);
	const [indices, setIndices] = useState(itemsToIndices(items));

	const addItem = () => {
		setIndices((prev) => [...prev, counter]);
		setCounter((prev) => prev + 1);
	};
	const removeItem = (index) => {
		setIndices((prev) => prev.filter((i) => i !== index));
	};

	console.log(items);

	return { indices, addItem, removeItem };
}

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
function renderItem(props: FormArrayFieldProps, index: number, removeItem: Function) {
	const { name, ItemComp } = props;

	const itemProps = {
		key: `${name}-${index}`,
		name,
		index,
		onRemove: () => removeItem(index),
	};

	return <ItemComp {...itemProps} />;
}

export function FormArrayField(props: FormArrayFieldProps) {
	const { name, label, wrapperComp } = props;

	const { indices, addItem, removeItem } = useArrayItems(props);

	// prettier-ignore
	return (
		<FormField label={label} name={name}>
			<Wrapper as={wrapperComp}>
				{indices.map((item, i) => renderItem(props, i, removeItem))}
			</Wrapper>
			<AddButton onClick={addItem} />
		</FormField>
	);
}
