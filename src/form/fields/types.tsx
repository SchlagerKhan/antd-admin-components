import {
	FormTextFieldProps,
	FormTextAreaFieldProps,
	FormNumberFieldProps,
	FormPasswordFieldProps,
	FormSelectFieldProps,
	FormSwitchFieldProps,
} from './single/input';

// prettier-ignore
export type FormFieldTemplateElement = {
	comp?: any;
	compProps?: any,
	value?: any;
	defaultValue?: any;
} & (
	FormTextFieldProps |
	FormTextAreaFieldProps |
	FormNumberFieldProps |
	FormPasswordFieldProps |
	FormSelectFieldProps |
	FormSwitchFieldProps
);
