import { FormikProps, FormikConfig } from 'formik';

import { FormFieldTemplateElement } from '../fields/types';

/* TYPES */

export interface BasicFormProps extends Partial<HTMLFormElement> {
	fields?: FormFieldTemplateElement[];
	withReset?: boolean;
	withSubmit?: boolean;
	submitText?: any;
	submitLoading?: boolean;
	children?: any;
}

export type FormikFormProps = BasicFormProps & FormikConfig<any>;

export interface FormProps extends BasicFormProps {
	formik?: FormikProps<any>;
	formikConfig?: FormikConfig<any>;
	formikRef?: any;
}
