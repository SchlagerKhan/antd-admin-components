import React from 'react';
import { useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { DeleteIcon } from '../helpers';

/* TYPES */
interface ItemProps {
	name: string;
	index: number;
	onRemove: (index: number) => void;
}

/* COMPONENTS */
const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Input = styled.input.attrs({
	/* Antd Inputs doesn't play well with react-hook-form so we use native ones with ant styling */
	className: 'ant-input',
})`
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
export function Item(props: ItemProps) {
	const { name, index, onRemove } = props;
	const { register } = useFormContext();

	const handleRemove = () => onRemove(index);

	const inputProps = {
		key: `${name}-${index}`,
		name: `${name}[${index}]`,
		ref: register,
	};

	return (
		<Wrapper>
			<Input {...inputProps} />
			<DeleteIcon onClick={handleRemove} />
		</Wrapper>
	);
}
