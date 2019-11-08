import React from 'react';

import styled from 'styled-components';

import { Table as TableComp } from './table';

const { Wrapper, Item, Title } = styled.SB;

const COLUMNS = [
	{
		title: 'Firstname',
		dataIndex: 'firstname',
	},
	{
		title: 'Lastname',
		dataIndex: 'lastname',
	},
];

const DATA = [
	{
		id: 1,
		firstname: 'Joan',
		lastname: 'Smith',
	},
	{
		id: 2,
		firstname: 'John',
		lastname: 'Doe',
	},
];

const ACTIONS = [
	{
		key: 'home',
		type: 'default',
		icon: 'home',
		onClick: (item, index) => console.log('Home', item, index),
	},
];

export function Table() {
	const simpleActions = {
		onEdit: (item, index) => console.log('Edit', item, index),
		onDelete: (item, index) => console.log('Delete', item, index),
	};

	return (
		<Wrapper>
			<Item>
				<Title>Table</Title>
				<TableComp rowKey='id' columns={COLUMNS} dataSource={DATA} />
			</Item>
			<Item>
				<Title>Table with actions</Title>
				<TableComp rowKey='id' columns={COLUMNS} dataSource={DATA} actions={ACTIONS} simpleActions={simpleActions} />
			</Item>
		</Wrapper>
	);
}
