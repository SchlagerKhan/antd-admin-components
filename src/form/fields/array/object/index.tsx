import React from 'react';

import { ArrayHelpers, FieldProps } from 'formik';
import { Collapse } from 'antd';

import { FormArrayField } from '../array';
import { BasicFormArrayFieldProps, FormArrayFieldProps, DeleteIcon } from '../helpers';

export interface FormObjectArrayFieldProps extends BasicFormArrayFieldProps {
	item: any;
	itemHeader?: (value: any, index: number) => any;
	defaultValue: any;
}

interface RenderPanelOpts {
	name: string;
	index: number;
	header: any;
	item: any;
	helpers: ArrayHelpers;
}

function renderPanel(opts: RenderPanelOpts) {
	const { item, index, helpers, header } = opts;
	const onRemove = () => helpers.remove(index);

	const panelProps = {
		key: `${name}-${index}`,
		header,
		extra: <DeleteIcon onClick={onRemove} />,
		children: item,
	};

	return <Collapse.Panel {...panelProps} />;
}

function renderItems(props: FormArrayFieldProps, fieldProps: FieldProps, helpers: ArrayHelpers) {
	const { itemHeader } = this;
	const { name, renderItem, ItemComp } = props;
	const values = fieldProps.field.value;

	return (
		<Collapse>
			{values.map((value, index) => {
				const opts = { name, index, ItemComp, helpers };
				const item = renderItem(opts);
				const header = itemHeader(value, index);

				return renderPanel({ name, index, header, item, helpers });
			})}
		</Collapse>
	);
}

export function FormObjectArrayField(props: FormObjectArrayFieldProps) {
	const { item } = props;

	const arrayFieldProps: FormArrayFieldProps = {
		...props,
		renderItems: renderItems.bind(props),
		ItemComp: item,
	};

	return <FormArrayField {...arrayFieldProps} />;
}

FormObjectArrayField.defaultProps = {
	itemHeader: (_, index) => index,
};
