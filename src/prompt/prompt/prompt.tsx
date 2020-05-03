import React, { useState } from 'react';

import { Modal } from 'antd';

import { PromptProps } from './types';

export function Prompt(props: PromptProps) {
	const { title, content, handleCancel } = props;
	const [confirmLoading, setLoading] = useState(false);

	async function handleOk() {
		try {
			setLoading(true);
			await props.handleOk();
		} catch (err) {
			setLoading(false);
		}
	}

	const modalProps = {
		visible: true,
		title,
		confirmLoading,
		onOk: handleOk,
		onCancel: handleCancel,
		children: content,
	};

	return <Modal {...modalProps} />;
}
