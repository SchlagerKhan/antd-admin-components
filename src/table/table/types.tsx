import { TableProps as AntTableProps, ColumnProps } from 'antd/lib/table';

export interface TableAction {
	key: string;
	icon: string;
	type?: string;
	safe?: boolean;
	onClick: (item: any, index: number) => any;
}

export interface TableColumn extends ColumnProps<any> {
	editable?: boolean;
}

export interface TableActionShortcut {
	onDelete?: TableAction['onClick'];
	onEdit?: TableAction['onClick'];
}

export interface TableProps extends AntTableProps<any> {
	rowKey: string;

	columns: TableColumn[];
	actions?: TableActionShortcut;
	actionsWidth?: number;
	extraActions?: TableAction[];

	onAdd?: () => any;

	searchValue?: string;
	onSearch?: (value) => void;
}
