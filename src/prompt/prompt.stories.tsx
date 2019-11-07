import { action } from '@storybook/addon-actions';

import React from 'react';

import styled from 'styled-components';

import { Button } from 'antd';

import { usePrompt } from './prompt';
import { useTextPrompt } from './text';

const { Wrapper, Item, Title } = styled.SB;

export const AllPrompts = () => {
	const title = 'Promp title';
	const onOk = (values) => console.log(values);

	const reg = usePrompt({ title, onOk, children: null });
	const text = useTextPrompt(['alias'], { title, onOk });

	return (
		<Wrapper>
			{reg.content}
			{text.content}
			<Item>
				<Title>Regular</Title>
				<Button onClick={reg.prompt}>Prompt</Button>
			</Item>
			<Item>
				<Title>Text</Title>
				<Button onClick={text.prompt}>Prompt</Button>
			</Item>
		</Wrapper>
	);
};

export default { title: 'Prompt' };
