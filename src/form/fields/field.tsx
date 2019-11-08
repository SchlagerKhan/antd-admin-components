import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100% !important;

	margin-bottom: 24px !important;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 2px;

	font-weight: bold;
`;

function renderLabel(label, name) {
	if (!label) {
		return null;
	}

	if (typeof label === 'string') {
		return <Label htmlFor={name}>{label}</Label>;
	}

	return label;
}

export function FormField(props) {
	const { label, name, children, ...wrapperProps } = props;

	return (
		<Wrapper {...wrapperProps}>
			{renderLabel(label, name)}
			{children}
		</Wrapper>
	);
}

export const BasicFieldPropTypes = {
	label: PropTypes.node,
	name: PropTypes.string.isRequired,
	register: PropTypes.func,
};

FormField.propTypes = {
	label: BasicFieldPropTypes.label,
	name: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};
