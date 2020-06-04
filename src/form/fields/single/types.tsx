export interface FormFieldProps {
	name: string;
	label?: any;
	instructions?: any;
	hideError?: boolean;
	children: any;
}

export type BasicFormFieldProps = Pick<FormFieldProps, 'name' | 'label' | 'instructions'>;
