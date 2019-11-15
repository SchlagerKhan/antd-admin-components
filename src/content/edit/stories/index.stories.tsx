import React from 'react';

import styled from 'styled-components';

import { EditContent } from '../index';
import { EditContentOverview } from '../overview';
import { EditContentForm } from '../form';

import { root, form, overview } from './helpers';

const { NarrowWrapper, Wrapper, Item, Title } = styled.SB;

export function Overview() {
	return (
		<Wrapper>
			<EditContentOverview root={root} {...overview} />
		</Wrapper>
	);
}

export function Form() {
	return (
		<NarrowWrapper>
			<Item>
				<Title>Form</Title>
				<EditContentForm {...form} />
			</Item>
		</NarrowWrapper>
	);
}

export function Content() {
	return (
		<Wrapper>
			<EditContent {...{ root, overview, form }} />
		</Wrapper>
	);
}

export default { title: 'Content/Edit' };
