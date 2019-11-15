import React from 'react';

import styled from 'styled-components';

import { Input as AntInput } from 'antd';

import { DeleteIcon, ArrayItemProps } from '../helpers';

/* COMPONENTS */
const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Input = styled(AntInput)`
	position: relative;
	margin-right: 4px;

	&:hover {
		z-index: 1;
	}

	&:not(:last-of-type) {
		input {
			border-bottom-left-radius: 0 !important;
			border-bottom-right-radius: 0 !important;
		}
	}
	&:not(:first-of-type) {
		input {
			margin-top: -1px;
			border-top-left-radius: 0 !important;
			border-top-right-radius: 0 !important;
		}
	}
`;

/* RENDERING */
export function Item(props: ArrayItemProps) {
	const { field, removeItem } = props;

	return (
		<Wrapper>
			<Input {...field} />
			<DeleteIcon onClick={removeItem} />
		</Wrapper>
	);
}
