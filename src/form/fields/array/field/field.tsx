import { get, cloneDeep } from 'lodash';

import React from 'react';
import { FieldArray } from 'formik';

import styled from 'styled-components';

import { LoadingButton } from '../../../../components';
import { useFieldProps } from '../../../../utils';
import { FormField } from '../../single';
import { FormArrayFieldProps, FormArrayRenderListOpts } from './types';

/* COMPONENTS */
const Wrapper = styled.div`
	margin-bottom: 6px;
`;

const AddButton = styled(LoadingButton).attrs({
	icon: 'plus',
	children: 'Add',
	htmlType: 'button',
})``;

/* RENDERING */
function defaultRenderList(opts: FormArrayRenderListOpts) {
	// Plainly renders all the items

	const { props, fieldProps, helpers } = opts;
	const { name, renderItem } = props;
	const items = get(fieldProps, 'field.value', []);

	return items.map((value, index) => {
		return renderItem({ name, index, helpers });
	});
}

function renderFieldArray(opts: FormArrayRenderListOpts) {
	// Renders the list with an add-button

	const { props, fieldProps, helpers } = opts;
	const { renderList, defaultValue } = props;
	const list = renderList({ props, fieldProps, helpers });

	const addItem = () => {
		const newItem = cloneDeep(defaultValue);
		helpers.push(newItem);
	};

	return (
		<>
			<Wrapper>{list}</Wrapper>
			<AddButton onClick={addItem} />
		</>
	);
}

export function FormArrayField(props: FormArrayFieldProps) {
	const { name, label, instructions } = props;

	const fieldProps = useFieldProps(name);
	const renderArray = (helpers) => renderFieldArray({ props, fieldProps, helpers });

	const formFieldProps = { name, label, instructions };
	const arrayProps = { name, render: renderArray };

	return (
		<FormField {...formFieldProps}>
			<FieldArray {...arrayProps} />
		</FormField>
	);
}

FormArrayField.defaultProps = {
	renderList: defaultRenderList,
};
