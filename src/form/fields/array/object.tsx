import React from 'react';

import { Collapse } from 'antd';

import { FormArrayField, BasicFormArrayFieldProps } from './array';
import { DeleteIcon } from './helpers';

export interface FormObjectArrayFieldProps extends BasicFormArrayFieldProps {
	renderElement: Function;
}

function renderItem(value, i, onRemove) {
	const { name, renderElement } = this;

	const panelProps = {
		key: `${name}-${i}`,
		header: 'Test',
		extra: <DeleteIcon onClick={onRemove} />,
	};

	// prettier-ignore
	return (
		<Collapse.Panel {...panelProps}>
			{renderElement(value, i)}
		</Collapse.Panel>
	);
}

export function FormObjectArrayField(props: FormObjectArrayFieldProps) {
	const {} = props;

	const fieldProps = {
		...props,
		wrapperComp: Collapse,
		ItemComp: false,
	};

	return <FormArrayField {...fieldProps} />;
}
