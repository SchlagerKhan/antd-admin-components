import React from 'react';

import styled, { css } from 'styled-components';

import { List } from 'antd';
import { ArrayHelpers, FieldInputProps } from 'formik';
import { Input as AntInput } from 'formik-antd';

import { DeleteIcon } from '../helpers';

const inputStyle = css`
	border: none !important;
	outline: none !important;
	box-shadow: none !important;
	resize: none;
`;

const ListItem = styled(List.Item)`
	padding: 0 !important;
`;

const Input = styled(AntInput)`
	${inputStyle}
`;

const TextArea = styled(AntInput.TextArea).attrs({
	autoSize: true,
})`
	${inputStyle}
`;

export function renderItem(props, field: FieldInputProps<any>, index: number, helpers: ArrayHelpers) {
	const name = `${field.name}[${index}]`;
	const deleteItem = () => helpers.remove(index);
	const deleteAction = <DeleteIcon onClick={deleteItem} />;

	const Comp = props.textarea ? TextArea : Input;

	return (
		<ListItem actions={[deleteAction]}>
			<Comp name={name} />
		</ListItem>
	);
}
