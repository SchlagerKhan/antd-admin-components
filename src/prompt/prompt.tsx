import { noop } from 'lodash';

import React, { useState } from 'react';

import { Modal } from 'antd';

export interface BasePromptOpts {
	title: string;
	onOk?: (...args) => any;
}

export interface PromptOpts extends BasePromptOpts {
	children: any;
}

interface PromptContentExtra {
	handleOk: () => any;
	handleCancel: () => any;
}

function renderChildren(children) {
	const childrenIsFn = typeof children === 'function';
	return childrenIsFn ? children() : children;
}

function renderContent(opts: PromptOpts, extra: PromptContentExtra) {
	const { title, children } = opts;
	const { handleOk, handleCancel } = extra;

	const modalProps = {
		title,
		visible: true,
		onOk: handleOk,
		onCancel: handleCancel,
		closable: false,
		children: renderChildren(children),
	};

	return <Modal {...modalProps} />;
}

export function usePrompt(opts: PromptOpts) {
	const { onOk = noop } = opts;
	const [content, setContent] = useState(null);

	function prompt() {
		return new Promise((resolve) => {
			async function handleOk() {
				await onOk();

				resolve(true);
				setContent(null);
			}

			function handleCancel() {
				resolve(false);
				setContent(null);
			}

			const newContent = renderContent(opts, { handleOk, handleCancel });
			setContent(newContent);
		});
	}

	return { prompt, content };
}
