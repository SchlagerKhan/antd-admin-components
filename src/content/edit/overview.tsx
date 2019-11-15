import React from 'react';
import { useHistory } from 'react-router-dom';

import { Table, TableProps, TableActionShortcut } from '../../table';
import { FormProps } from '../../form';
import { formPrompt } from '../../prompt';

export interface EditContentOverviewProps {
	idKey?: TableProps['rowKey'];
	columns: TableProps['columns'];
	data: TableProps['dataSource'];

	root: string;
	onDelete?: TableActionShortcut['onDelete'];

	addOpts: {
		fields: FormProps['fields'];
		onAdd: (values: any) => any;
	};
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
	const { idKey, columns, data, root, onDelete } = props;
	const history = useHistory();

	function onEdit(row) {
		const path = `${root}/${row[idKey]}`;
		history.push(path);
	}

	const tableProps = {
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
};
