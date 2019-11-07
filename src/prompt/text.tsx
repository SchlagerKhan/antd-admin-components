import { noop } from 'lodash';

import React from 'react';
import useForm from 'react-hook-form';

import styled from 'styled-components';

import { Input } from 'antd';

import { usePrompt, BasePromptOpts } from './prompt';

function renderInput(input, register) {
	const inputRef = (ref) => ref && register(ref.inputRef);

	return <Input key={input} placeholder={input} name={input} ref={inputRef} />;
}

function createChildren(form, inputs: string[]) {
	const { register } = form;

	return inputs.map((input) => renderInput(input, register));
}

function createHandleOk(opts, form) {
	const { onOk = noop } = opts;

	return () => onOk(form.getValues());
}

function createPrompt(opts, promptState, form) {
	const { prompt } = promptState;

	return async () => {
		const isOk = await prompt();

		return isOk ? form.getValues() : null;
	};
}

export function useTextPrompt(inputs: string[], opts: BasePromptOpts) {
	const form = useForm();
	const children = createChildren(form, inputs);

	const onOk = createHandleOk(opts, form);
	const promptState = usePrompt({ ...opts, onOk, children });

	const { content } = promptState;
	const prompt = createPrompt(opts, promptState, form);

	return { prompt, content };
}
