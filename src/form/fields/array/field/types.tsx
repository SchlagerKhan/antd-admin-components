import { FieldProps, ArrayHelpers } from 'formik';

import { BasicFormFieldProps } from '../../single';

export interface FormArrayRenderItemOpts {
	name: FormArrayFieldProps['name'];
	index: number;
	helpers: ArrayHelpers;
}

export interface FormArrayRenderListOpts {
	props: FormArrayFieldProps;
	fieldProps: FieldProps;
	helpers: ArrayHelpers;
}

export interface FormArrayFieldProps {
	name: string;
	label?: string;
	defaultValue: any;
	renderItem?: (opts: FormArrayRenderItemOpts) => JSX.Element;
	renderList?: (opts: FormArrayRenderListOpts) => JSX.Element;
}

export interface BasicFormArrayFieldProps extends BasicFormFieldProps {}

export interface ArrayItemProps extends FieldProps {
	index: number;
	removeItem: () => void;
}
