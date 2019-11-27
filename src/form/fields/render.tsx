import React from 'react';

import { FormFieldTemplateElement } from './types';
import { FormTextField } from './single';

function renderField(field: FormFieldTemplateElement) {
	const { comp, compProps, ...fieldProps } = field;
	const { name } = fieldProps;

	const FieldComp = comp || FormTextField;
	const key = `field-${name}`;

	return <FieldComp key={key} {...compProps} {...fieldProps} />;
}

export function renderFields(fields: FormFieldTemplateElement[]) {
	return fields.map(renderField);
}
