import React from 'react';

import { Table, TableProps, TableColumn } from '../table';
import { Cell } from './cell';

interface EditTableProps extends TableProps {
	onEdit: (column: TableColumn, item: any, change: string) => void;
}

function getColumns(props: EditTableProps) {
	const { columns, onEdit } = props;

	return columns.map((column) => ({
		...column,
		render(text, item) {
			return <Cell column={column} text={text} item={item} onEdit={onEdit} />;
		},
	}));
}

export function EditTable(props: EditTableProps) {
	console.warn('EditTable is still under development, be careful!');

	const columns = getColumns(props);

	return <Table {...props} columns={columns} />;
}
