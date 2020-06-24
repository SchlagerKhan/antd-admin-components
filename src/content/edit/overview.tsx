import React from 'react';
import { useHistory } from 'react-router-dom';

import { Table, TableProps, TableActionShortcut } from '../../table';
import { FormProps } from '../../form';
import { formPrompt } from '../../prompt';

export interface EditContentOverviewProps {
	idKey?: TableProps['rowKey'];
	loading?: boolean;

	columns: TableProps['columns'];
	data: TableProps['dataSource'];

	rootPath: string;
	onDelete?: TableActionShortcut['onDelete'];

	addOpts: {
		fields: FormProps['fields'];
		onAdd: (values: any) => any;
	};

	tableProps?: Partial<TableProps>;
}

function createOnAdd(props: EditContentOverviewProps) {
	const { fields, onAdd } = props.addOpts;

	const title = 'Add new';
	const onOk = onAdd;

	return () => {
		formPrompt(fields, { title, onOk });
	};
}

export function EditContentOverview(props: EditContentOverviewProps) {
	const { idKey, loading, columns, data, rootPath: root, onDelete, tableProps: $tableProps } = props;
	const history = useHistory();

	function onEdit(row) {
		const path = `${root}/${row[idKey]}`;
		history.push(path);
	}

	const tableProps: TableProps = {
		...$tableProps,
		loading,
		rowKey: idKey,
		dataSource: data,
		columns,
		onAdd: createOnAdd(props),
		actions: { onEdit, onDelete },
	};

	return <Table {...tableProps} />;
}

EditContentOverview.defaultProps = {
	idKey: 'id',
	pagination: {
		defaultPageSize: 25,
	},
};
