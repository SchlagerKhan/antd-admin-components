import React from 'react';

import { Modal } from 'antd';

import { PromptProps } from './types';

export function Prompt(props: PromptProps) {
	const { title, content, handleOk, handleCancel } = props;

	const modalProps = {
		visible: true,
		title,
		onOk: handleOk,
		onCancel: handleCancel,
		children: content,
	};

	return <Modal {...modalProps} />;
}
