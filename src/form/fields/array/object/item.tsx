import React from 'react';

import { ArrayHelpers } from 'formik';
import { Collapse } from 'antd';

import { DeleteIcon } from '../helpers';

const { Panel } = Collapse;

interface RenderPanelOpts {
	name: string;
	index: number;
	header: any;
	item: any;
	helpers: ArrayHelpers;
}

export function renderPanel(opts: RenderPanelOpts) {
	const { name, item, index, helpers, header } = opts;
	const onRemove = () => helpers.remove(index);

	const panelProps = {
		key: `${name}-${index}`,
		header,
		extra: <DeleteIcon onClick={onRemove} />,
		children: item,
	};

	return <Panel {...panelProps} />;
}
