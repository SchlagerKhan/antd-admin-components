import React from 'react';

import styled from 'styled-components';

import { Table as AntTable, Button, Input, Icon } from 'antd';

import { TableProps } from './types';
import { getColumns } from './actions';

export * from './types';

const Header = styled.div`
	margin-bottom: 12px;

	display: flex;
	justify-content: space-between;
`;

const AddButton = styled(Button)``;

const Search = styled(Input)`
	width: 400px;
`;

function renderHeader(props: TableProps) {
	const addButton = renderAddButton(props);
	const search = renderSearch(props);

	if (!addButton && !search) {
		return null;
	}

	return (
		<Header>
			{addButton}
			{search}
		</Header>
	);
}

function renderAddButton(props: TableProps) {
	const { onAdd } = props;

	if (!onAdd) {
		return null;
	}

	return <AddButton onClick={onAdd}>Add</AddButton>;
}

function renderSearch(props: TableProps) {
	const { searchValue, onSearch } = props;

	if (!onSearch) {
		return null;
	}

	const searchProps = {
		placeholder: 'Search',
		prefix: <Icon type='search' />,
		value: searchValue,
		onChange: (e) => onSearch(e.target.value),
	};

	return <Search {...searchProps} />;
}

export function Table(props: TableProps) {
	const columns = getColumns(props);

	return (
		<>
			{renderHeader(props)}
			<AntTable {...props} columns={columns} />
		</>
	);
}

Table.defaultProps = {
	actions: {},
	extraActions: [],
	actionsWidth: 150,
};
