import React from 'react';

import styled from 'styled-components';

import { EditTable as TableComp } from '../index';
import { DATA, COLUMNS, onEdit } from './helpers';

const { Wrapper, Item, Title } = styled.SB;

export function EditableTable() {
	const onDelete = console.log;
	const actions = { onDelete };

	return (
		<Wrapper>
			<Item>
				<Title>Editable table</Title>
				<TableComp rowKey='id' columns={COLUMNS} dataSource={DATA} actions={actions} onEdit={onEdit} />
			</Item>
		</Wrapper>
	);
}
