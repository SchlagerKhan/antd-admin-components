import { FormikProps, FormikConfig } from 'formik';

import { FormTextFieldProps, FormTextAreaFieldProps, FormNumberFieldProps } from '../fields';

/* TYPES */
export type FormFieldTemplateElement = {
	comp?: any;
	value?: any;
	defaultValue?: any;
} & (FormTextFieldProps | FormTextAreaFieldProps | FormNumberFieldProps);

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
