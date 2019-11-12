import React from 'react';

import { FormArrayField } from '../array';
import { BasicFormArrayFieldProps, FormArrayFieldProps } from '../helpers';
import { Item } from './item';

export interface FormTextArrayFieldProps extends BasicFormArrayFieldProps {}

export function FormTextArrayField(props: FormTextArrayFieldProps) {
	const fieldProps: FormArrayFieldProps = {
		...props,
		defaultValue: '',
		ItemComp: Item,
	};

	return <FormArrayField {...fieldProps} />;
}
