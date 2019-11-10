import React from 'react';

import styled from 'styled-components';

import { Button } from 'antd';

import { FormField, BasicFormFieldProps } from '../field';

export interface FormArrayFieldProps {
	name: string;
	label?: string;
	onAdd: Function;
	children: any;
}

export interface BasicFormArrayFieldProps extends BasicFormFieldProps {
	onAdd: FormArrayFieldProps['onAdd'];
	onRemove: Function;
}

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

export function FormArrayField(props: FormArrayFieldProps) {
	const { name, label, onAdd, children } = props;

	const fieldLabel = label && (
		<LabelWrapper>
			<span>{props.label}</span>
		</LabelWrapper>
	);

	// prettier-ignore
	return (
		<FormField label={fieldLabel} name={name}>
			<Wrapper>{children}</Wrapper>
			<AddButton onClick={onAdd} />
		</FormField>
	);
}
