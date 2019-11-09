import React, { useState, useEffect, createRef } from 'react';

import styled from 'styled-components';

import { Input } from 'antd';
import { TableColumn } from '../table';

interface CellProps {
	column: TableColumn;
	text: string;
	item: any;
	onEdit: (column: TableColumn, item, values: string) => void;
}

const Text = styled.div``;

export function Cell(props: CellProps) {
	const { column, text, item, onEdit } = props;
	const inputRef = createRef<Input>();

	const [edit, setEdit] = useState();
	const isEditable = column.editable;
	const isEditing = isEditable && edit;

	const openEdit = () => setEdit(true);
	const closeEdit = () => {
		setEdit(false);

		const { value } = inputRef.current.input;
		onEdit(column, item, value);
	};

	useEffect(() => {
		if (isEditing && inputRef) {
			inputRef.current.focus();
		}
	}, [isEditing]);

	if (!isEditing) {
		return <Text onClick={isEditable && openEdit}>{text}</Text>;
	}

	return <Input defaultValue={text} onPressEnter={closeEdit} onBlur={closeEdit} ref={inputRef} />;
}
