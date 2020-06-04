import React from 'react';

import { useField } from 'formik';
import { Input } from 'formik-antd';

import JsxMarkdown from 'markdown-to-jsx';

import styled from 'styled-components';

import { FormFieldProps } from './types';
import { FormField } from './field';

export interface FormMarkdownFieldProps extends FormFieldProps {
	MarkdownComponent?: any;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TextArea = styled(Input.TextArea)`
	width: 48% !important;
`;

const Markdown = styled(JsxMarkdown)`
	width: 48% !important;
`;

export function FormMarkdownField(props: FormMarkdownFieldProps) {
	const { name, label, MarkdownComponent } = props;
	const [field] = useField(name);

	return (
		<FormField {...{ name, label }}>
			<Wrapper>
				<TextArea autoSize name={name} />
				<MarkdownComponent>{field.value || ''}</MarkdownComponent>
			</Wrapper>
		</FormField>
	);
}

FormMarkdownField.defaultProps = {
	MarkdownComponent: Markdown,
};
