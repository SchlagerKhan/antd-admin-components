import React from 'react';

import { Collapse } from 'antd';

import { FormFieldTemplateElement } from '../../types';
import { renderFields } from '../../render';
import { FormArrayField, BasicFormArrayFieldProps, FormArrayFieldProps, FormArrayRenderListOpts } from '../field';
import { DeleteIcon } from '../helpers';

const { Panel } = Collapse;

export interface FormObjectArrayFieldProps extends BasicFormArrayFieldProps {
	fields: FormFieldTemplateElement[];
	itemHeader?: (value: any, index: number) => any;
	defaultValue: any;
}

function formatField(arrayName, field, index) {
	const name = `${arrayName}.${index}.${field.name}`;

	return Object.assign({}, field, { name });
}

function renderList(opts: FormArrayRenderListOpts) {
	const { fields, itemHeader } = this;
	const { name, value = [] } = opts.fieldProps.field;

	function renderPanel(item, index) {
		const onRemove = () => opts.helpers.remove(index);
		const formattedFields = fields.map((field) => formatField(name, field, index));

		const panelProps = {
			key: `${name}-${index}`,
			header: itemHeader(item, index),
			extra: <DeleteIcon onClick={onRemove} />,
			children: renderFields(formattedFields),
		};

		return <Panel {...panelProps} />;
	}

	if (value.length === 0) {
		return null;
	}

	return <Collapse>{value.map(renderPanel)}</Collapse>;
}

export function FormObjectArrayField(props: FormObjectArrayFieldProps) {
	const arrayFieldProps: FormArrayFieldProps = {
		...props,
		renderList: renderList.bind(props),
	};

	return <FormArrayField {...arrayFieldProps} />;
}

FormObjectArrayField.defaultProps = {
	itemHeader: (_, index) => index,
};
