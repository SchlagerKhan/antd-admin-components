import React from 'react';

import { ArrayHelpers, FieldProps } from 'formik';
import { Collapse } from 'antd';

import { FormArrayField } from '../array';
import { BasicFormArrayFieldProps, FormArrayFieldProps, DeleteIcon, ArrayItemProps } from '../helpers';

export interface FormObjectArrayFieldProps extends BasicFormArrayFieldProps {
	renderElement: (props: ArrayItemProps) => JSX.Element;
	defaultValue: any;
}

function renderPanel(opts) {
	const { item, value, index, helpers } = opts;
	const onRemove = () => helpers.remove(index);

	const panelProps = {
		key: `${name}-${index}`,
		header: index,
		extra: <DeleteIcon onClick={onRemove} />,
		children: item,
	};

	return <Collapse.Panel {...panelProps} />;
}

function renderItems(props: FormArrayFieldProps, fieldProps: FieldProps, helpers: ArrayHelpers) {
	const { name, renderItem, ItemComp } = props;
	const values = fieldProps.field.value;

	return (
		<Collapse>
			{values.map((value, index) => {
				const opts = { name, index, ItemComp, helpers };
				const item = renderItem(opts);

				return renderPanel({ value, item, index, helpers });
			})}
		</Collapse>
	);
}

export function FormObjectArrayField(props: FormObjectArrayFieldProps) {
	const { renderElement } = props;

	const arrayFieldProps: FormArrayFieldProps = {
		...props,
		renderItems,
		ItemComp: (props) => renderElement(props),
	};

	return <FormArrayField {...arrayFieldProps} />;
}
