import { get } from 'lodash';

import React from 'react';

import styled from 'styled-components';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'formik-antd';

const { Option } = AntSelect;

export interface SelectProps extends AntSelectProps {
	options?: any[];
}

function renderOption(option) {
	const value = get(option, 'value', option);
	const title = get(option, 'title', option);
	const disabled = get(option, 'disabled', false);
	const key = value;

	return (
		<Option key={key} value={value} disabled={disabled}>
			{title}
		</Option>
	);
}

export function Select(props: SelectProps) {
	const { options, ...selectProps } = props;

	return (
		// prettier-ignore
		<AntSelect {...selectProps}>
			{options.map(renderOption)}
		</AntSelect>
	);
}

Select.Option = Option;

styled.Select = styled(Select);
