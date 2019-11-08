import React from 'react';

import styled from 'styled-components';

import { Table as AntTable, Button as AntButton } from 'antd';
import { TableProps as AntTableProps } from 'antd/lib/table';

export interface TableAction {
	key: string;
	icon: string;
	type?: string;
	onClick: (item: any, index: number) => any;
}

export interface SimpleTableActions {
	onDelete: TableAction['onClick'];
	onEdit: TableAction['onClick'];
}

export interface TableProps extends AntTableProps<any> {
	actions?: TableAction[];
	actionsWidth?: number;
	simpleActions?: SimpleTableActions;
}

const Button = styled(AntButton)`
	margin-right: 4px;
`;

function renderAction(action: TableAction, item, index) {
	const { key, icon, type, onClick } = action;
	const handleClick = () => onClick(item, index);

	// @ts-ignore
	return <Button key={key} type={type} icon={icon} onClick={handleClick} />;
}

function getActionColumn(props: TableProps, actions: TableAction[]) {
	const { simpleActions, actionsWidth } = props;
	const { onEdit, onDelete } = simpleActions;

	return {
		key: 'actions',
		title: 'Action',
		width: actionsWidth,
		render(_, item, index) {
			const btns = actions.map((action) => renderAction(action, item, index));

			return btns;
		},
	};
}

function getActions(props: TableProps) {
	const actions = [...props.actions];
	const { onEdit, onDelete } = props.simpleActions;

	if (onEdit) {
		actions.push({
			key: 'delete',
			icon: 'delete',
			type: 'danger',
			onClick: onDelete,
		});
	}

	if (onDelete) {
		actions.push({
			key: 'edit',
			type: 'primary',
			icon: 'edit',
			onClick: onEdit,
		});
	}

	return actions;
}

function getColumns(props: TableProps) {
	const { columns } = props;
	const actions = getActions(props);

	if (!actions) {
		return columns;
	}

	return [...columns, getActionColumn(props, actions)];
}

export function Table(props: TableProps) {
	const columns = getColumns(props);

	return <AntTable {...props} columns={columns} />;
}

Table.defaultProps = {
	actions: [],
	simpleActions: {},
	actionsWidth: 150,
};
