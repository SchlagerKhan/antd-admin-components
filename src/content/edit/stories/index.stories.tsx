import React from 'react';

import styled from 'styled-components';

import { EditContent } from '../index';
import { EditContentOverview } from '../overview';
import { EditContentForm } from '../form';

import { rootPath, form, overview } from './helpers.story';

const { NarrowWrapper, Wrapper, Item, Title } = styled.SB;

export function Overview() {
	return (
		<Wrapper>
			<EditContentOverview {...overview} {...{ rootPath }} />
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
			<EditContent {...{ rootPath, overview, form }} />
		</Wrapper>
	);
}

export default { title: 'Content/Edit' };
