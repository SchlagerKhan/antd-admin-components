import React from 'react';

import styled from 'styled-components';

import { Button } from 'antd';

import { TableAction, TableProps } from './types';

const ActionButton = styled(Button)`
	margin-right: 4px;
`;

/* RENDERING */
function renderAction(action: TableAction, item, index) {
	const { key, icon, type, onClick } = action;
	const handleClick = () => onClick(item, index);

	// @ts-ignore
	return <ActionButton key={key} type={type} icon={icon} onClick={handleClick} />;
}

/** GETTERS */
export function getActionColumn(props: TableProps, actions: TableAction[]) {
	return {
		key: 'actions',
		title: 'Action',
		width: props.actionsWidth,
		render(_, item, index) {
			const renderFn = (action) => renderAction(action, item, index);
			return actions.map(renderFn);
		},
	};
}

export function getActions(props: TableProps): TableAction[] {
	const actions = [...props.extraActions];
	const { onEdit, onDelete } = props.actions;

	if (onEdit) {
		actions.push({
			key: 'edit',
			type: 'primary',
			icon: 'edit',
			onClick: onEdit,
		});
	}

	if (onDelete) {
		actions.push({
			key: 'delete',
			icon: 'delete',
			type: 'danger',
			onClick: onDelete,
		});
	}

	return actions;
}

export function getColumns(props: TableProps) {
	const { columns } = props;
	const actions = getActions(props);

	if (!actions) {
		return columns;
	}

	return [...columns, getActionColumn(props, actions)];
}
