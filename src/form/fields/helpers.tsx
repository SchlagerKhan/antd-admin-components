import React from 'react';

import { useFormContext } from 'react-hook-form';

export function getRegister(props) {
	const { register } = useFormContext();

	return props.register || register;
}

export function withRegister(Comp) {
	return (props) => {
		const register = getRegister(props);

		return <Comp {...props} register={register} />;
	};
}
