import React from 'react';

import styled from 'styled-components';

import { Table as TableComp } from '../index';
import { DATA, COLUMNS, ACTIONS, EXTRA_ACTIONS, onAdd, onSearch } from './helpers';

const { Wrapper, Item, Title } = styled.SB;

export function Table() {
	return (
		<Wrapper>
			<Item>
				<Title>Table</Title>
				<TableComp rowKey='id' columns={COLUMNS} dataSource={DATA} onAdd={onAdd} onSearch={onSearch} />
			</Item>
			<Item>
				<Title>Table with actions</Title>
				<TableComp rowKey='id' columns={COLUMNS} dataSource={DATA} actions={ACTIONS} extraActions={EXTRA_ACTIONS} />
			</Item>
		</Wrapper>
	);
}
