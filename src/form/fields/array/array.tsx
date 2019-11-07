import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Button } from 'antd';

import { FormField, BasicFieldPropTypes } from '../field';

const Wrapper = styled.div`
	margin-bottom: 24px;
`;

const LabelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 4px;
`;

const AddButton = styled(Button).attrs({
	icon: 'plus',
	children: 'Add',
	htmlType: 'button',
})``;

export function FormArrayField(props) {
	const { name, onAdd, children } = props;

	const label = (
		<LabelWrapper>
			<span>{props.label}</span>
		</LabelWrapper>
	);

	// prettier-ignore
	return (
		<FormField label={label} name={name}>
			<Wrapper>{children}</Wrapper>
			<AddButton onClick={onAdd} />
		</FormField>
	);
}

export const BasicFormArrayField = {
	...BasicFieldPropTypes,
	onAdd: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

FormArrayField.propTypes = {
	name: PropTypes.string.isRequired,
	label: BasicFieldPropTypes.label,
	children: PropTypes.any.isRequired,
};
