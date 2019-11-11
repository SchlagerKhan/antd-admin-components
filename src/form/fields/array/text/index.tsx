import React from 'react';

import { FormArrayField, BasicFormArrayFieldProps, FormArrayFieldProps } from '../array';
import { Item } from './item';

export interface FormTextArrayFieldProps extends BasicFormArrayFieldProps {}

export function FormTextArrayField(props: FormTextArrayFieldProps) {
	const fieldProps: FormArrayFieldProps = {
		...props,
		ItemComp: Item,
	};

	return <FormArrayField {...fieldProps} />;
}
