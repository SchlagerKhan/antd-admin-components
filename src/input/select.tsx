import { get } from 'lodash';

import React from 'react';

import styled from 'styled-components';

import { Select as AntSelect } from 'antd';
import { Select as FormikAntSelect, SelectProps as FormikAntSelectProps } from 'formik-antd';
import { SelectProps as AntSelectProps, OptionProps } from 'antd/lib/select';

const { Option } = FormikAntSelect;

interface FormikSelectProps extends FormikAntSelectProps {
	useAntSelect?: false;
	options?: (OptionProps | string)[];
	children?: any;
}

interface CustomAntSelectProps extends AntSelectProps {
	useAntSelect: true;
	options?: (OptionProps | string)[];
	children?: any;
}

export type SelectProps = FormikSelectProps | CustomAntSelectProps;

/* GETTERS */
function getOptionProps(option: OptionProps | string) {
	const value = get(option, 'value', option);
	const children = get(option, 'title', option);
	const key = value;

	const baseProps = { key, value, children };

	if (typeof option === 'string') {
		return baseProps;
	}

	return Object.assign({}, option, baseProps);
}

function getSelectComp(props: SelectProps) {
	const { useAntSelect } = props;

	return useAntSelect ? AntSelect : FormikAntSelect;
}

/* RENDERING */
function renderOption(option: OptionProps) {
	const optionProps = getOptionProps(option);

	return <Option {...optionProps} />;
}

function renderChildren(options, children) {
	if (options) {
		return options.map(renderOption);
	}

	return children;
}

export function Select(props: SelectProps) {
	const { options, children, ...selectProps } = props;
	const SelectComp = getSelectComp(props);

	return (
		// prettier-ignore
		// @ts-ignore
		<SelectComp {...selectProps}>
			{renderChildren(options, children)}
		</SelectComp>
	);
}

Select.Option = Option;

styled.Select = styled(Select);
