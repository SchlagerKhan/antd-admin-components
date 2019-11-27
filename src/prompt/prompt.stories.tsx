import React from 'react';

import styled from 'styled-components';

import { Button as AntButton } from 'antd';

import { prompt, formPrompt, textPrompt } from './index';

const { Wrapper, Item, Title } = styled.SB;

const Content = styled.Item`
	display: flex;
`;

const Button = styled(AntButton)`
	margin-right: 12px;
`;

const FIELDS = [
	{
		name: 'text',
		label: 'Text',
	},
	{
		name: 'text2',
		label: 'Text 2',
		defaultValue: 'Default value',
	},
];

function callPrompt(fn) {
	return async () => {
		const res = await fn();

		console.log('Prompt response', res);
	};
}

function onOk(values) {
	console.log('Prompt values', values);
}

export const AllPrompts = () => {
	const title = 'Promp title';

	const reg = () => prompt({ title, onOk, content: <div>Prompt content</div> });
	const text = () => textPrompt(['alias'], { title, onOk });
	const form = () => formPrompt(FIELDS, { title, onOk });

	return (
		<Wrapper>
			<Item>
				<Title>Prompts</Title>
				<Content>
					<Button onClick={callPrompt(reg)}>Regular</Button>
					<Button onClick={callPrompt(form)}>Form</Button>
					<Button onClick={callPrompt(text)}>Text</Button>
				</Content>
			</Item>
		</Wrapper>
	);
};

export default { title: 'Prompt' };
