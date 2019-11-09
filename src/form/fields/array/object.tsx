import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Collapse, Icon } from 'antd';

import { FormArrayField, BasicFormArrayFieldProps } from './array';

export interface FormObjectArrayFieldProps extends BasicFormArrayFieldProps {
	renderElement: Function;
	values: any[];
}

const DeleteIcon = styled(Icon).attrs({
	type: 'delete',
})``;

function renderPanel(value, i) {
	const { name, renderElement, onRemove } = this;
	const key = `${name}-${i}`;

	function handleRemove(e) {
		e.stopPropagation();
		onRemove();
	}

	const deleteIcon = <DeleteIcon onClick={handleRemove} />;

	return (
		<Collapse.Panel key={key} header='Test' extra={deleteIcon}>
			{renderElement(value, i)}
		</Collapse.Panel>
	);
}

export function FormObjectArrayField(props) {
	const { values, ...fieldProps } = props;

	// prettier-ignore
	return (
		<FormArrayField {...fieldProps}>
			<Collapse>
				{values.map(renderPanel.bind(props))}
			</Collapse>
		</FormArrayField>
	);
}

FormObjectArrayField.defaultProps = {
	values: [],
};
