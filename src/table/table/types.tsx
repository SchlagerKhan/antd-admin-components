import { TableProps as AntTableProps, ColumnProps } from 'antd/lib/table';

export interface TableAction {
	key: string;
	icon: string;
	type?: string;
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

	onAdd?: () => void;

	onSearch?: (value) => void;
	searchValue?: string;
}
