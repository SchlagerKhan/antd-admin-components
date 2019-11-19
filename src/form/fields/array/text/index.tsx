import React from 'react';

import { List } from 'antd';
import { ListProps } from 'antd/lib/list';

import { FormArrayField, BasicFormArrayFieldProps, FormArrayFieldProps, FormArrayRenderListOpts } from '../field';
import { renderItem } from './item';

export interface FormTextArrayFieldProps extends BasicFormArrayFieldProps {
	textarea?: boolean;
}

function renderList(opts: FormArrayRenderListOpts) {
	const props = this;
	const { field } = opts.fieldProps;
	const dataSource = field.value || [];

	if (dataSource.length === 0) {
		return null;
	}

	const listProps: ListProps<any> = {
		bordered: true,
		size: 'small',
		dataSource: field.value || [],
		renderItem: (_, index) => renderItem(props, field, index, opts.helpers),
	};

	return <List {...listProps} />;
}

export function FormTextArrayField(props: FormTextArrayFieldProps) {
	const fieldProps: FormArrayFieldProps = {
		...props,
		defaultValue: '',
		renderList: renderList.bind(props),
	};

	return <FormArrayField {...fieldProps} />;
}
