import React from 'react';

import styled from 'styled-components';

import { Button as AntButton } from 'antd';

import { usePrompt } from './prompt';
import { useTextPrompt } from './text';
import { useFormPrompt } from './form';

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

function doPrompt(promptState) {
	return async () => {
		const res = await promptState.prompt();

		console.log('Prompt response', res);
	};
}

function onOk(values) {
	console.log('Prompt values', values);
}

export const AllPrompts = () => {
	const title = 'Promp title';

	const reg = usePrompt({ title, onOk, children: <div>Prompt content</div> });
	const text = useTextPrompt(['alias'], { title, onOk });
	const form = useFormPrompt(FIELDS, { title, onOk });

	return (
		<Wrapper>
			{reg.content}
			{text.content}
			{form.content}
			<Item>
				<Title>Prompts</Title>
				<Content>
					<Button onClick={doPrompt(reg)}>Regular</Button>
					<Button onClick={doPrompt(text)}>Texts</Button>
					<Button onClick={doPrompt(form)}>Form</Button>
				</Content>
			</Item>
		</Wrapper>
	);
};

export default { title: 'Prompt' };
