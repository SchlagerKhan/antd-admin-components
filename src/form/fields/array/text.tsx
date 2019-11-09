import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Collapse, Icon } from 'antd';

import { FormArrayField, BasicFormArrayFieldProps } from './array';

export interface FormTextArrayFieldProps extends BasicFormArrayFieldProps {
	values: any[];
}

const Element = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 8px 0;
`;

const DeleteIcon = styled(Icon).attrs({
	type: 'delete',
})``;

function renderElement(props, value, i) {
	const { name, onRemove } = props;
	const key = `${name}-${i}`;

	function handleRemove(e) {
		e.stopPropagation();
		onRemove();
	}

	const deleteIcon = <DeleteIcon onClick={handleRemove} />;

	return (
		<Collapse.Panel key={key} header='Test' extra={deleteIcon}>
			<p>{value}</p>
		</Collapse.Panel>
	);
}

export function FormTextArrayField(props) {
	const { values, ...fieldProps } = props;
	const doRenderElement = (value, i) => renderElement(props, value, i);

	// prettier-ignore
	return (
		<FormArrayField {...fieldProps}>
			<Collapse>
				{values.map(doRenderElement)}
			</Collapse>
		</FormArrayField>
	);
}

FormTextArrayField.defaultProps = {
	values: [],
};
