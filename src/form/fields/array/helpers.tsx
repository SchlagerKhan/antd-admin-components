import styled from 'styled-components';

import { FieldProps, ArrayHelpers, FieldInputProps, FieldMetaProps, useField, useFormikContext } from 'formik';
import { Icon } from 'antd';

import { BasicFormFieldProps } from '../field';

/* TYPES */
export interface FormArrayRenderItemOpts {
	name: FormArrayFieldProps['name'];
	index: number;
	ItemComp: FormArrayFieldProps['ItemComp'];
	helpers: ArrayHelpers;
}

export interface FormArrayFieldProps {
	name: string;
	label?: string;
	defaultValue: any;
	renderItem?: (opts: FormArrayRenderItemOpts) => JSX.Element;
	renderItems?: (props: FormArrayFieldProps, fieldProps: FieldProps, helpers: ArrayHelpers) => JSX.Element;
	ItemComp: any;
}

export interface BasicFormArrayFieldProps extends BasicFormFieldProps {}

export interface ArrayItemProps extends FieldProps {
	index: number;
	onRemove: (index: number) => void;
}

/* COMPONENTS */
export const DeleteIcon = styled(Icon).attrs({
	type: 'delete',
})``;

/* HOOKS */
export function useFieldProps(name): FieldProps {
	const [field, meta] = useField(name);
	const form = useFormikContext();

	return { field, meta, form };
}
