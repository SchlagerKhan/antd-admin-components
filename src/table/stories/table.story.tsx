import React, { useState } from 'react';

import styled from 'styled-components';

import { Table as TableComp } from '../index';
import { DATA, COLUMNS, ACTIONS, EXTRA_ACTIONS } from './helpers.story';

const { Wrapper, Item, Title } = styled.SB;

export function Table() {
	const [data, setData] = useState(DATA);
	const [search, setSearch] = useState('');

	const onAdd = () => {
		console.log(data.length);

		setData([
			...data,
			{
				id: data.length + 1,
				firstname: 'Test',
				lastname: 'Testson',
				age: 35,
			},
		]);
	};

	const onDelete = (item) => {
		const filterFn = (el) => el.id !== item.id;
		setData(data.filter(filterFn));
	};

	const filteredData = data.filter((el) => el.firstname.includes(search));

	return (
		<Wrapper>
			<Item>
				<Title>Table</Title>
				<TableComp
					rowKey='id'
					columns={COLUMNS}
					dataSource={filteredData}
					onAdd={onAdd}
					searchValue={search}
					onSearch={setSearch}
					actions={{ onDelete }}
				/>
			</Item>
			<Item>
				<Title>Table with actions</Title>
				<TableComp rowKey='id' columns={COLUMNS} dataSource={DATA} actions={ACTIONS} extraActions={EXTRA_ACTIONS} />
			</Item>
		</Wrapper>
	);
}
