import { useFormContext } from 'react-hook-form';

export function getRegister(props) {
	const { register } = useFormContext();

	return props.register || register;
}
