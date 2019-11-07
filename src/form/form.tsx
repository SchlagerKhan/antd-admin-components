import React from 'react';
import PropTypes from 'prop-types';

import { FormContext } from 'react-hook-form';

import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export function Form({ form, ...formProps }) {
	return (
		<FormContext {...form}>
			<StyledForm {...formProps} />
		</FormContext>
	);
}

Form.propTypes = {
	form: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

styled.Form = styled(Form);
