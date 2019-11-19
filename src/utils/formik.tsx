import { FieldProps, useField, useFormikContext } from 'formik';

export function useFieldProps(name): FieldProps {
	const [field, meta] = useField(name);
	const form = useFormikContext();

	return { field, meta, form };
}
