import React from 'react';

import styled from 'styled-components';

import { Typography, Icon } from 'antd';

const { Text } = Typography;

const Delete = styled(Icon).attrs({
	type: 'delete',
})`
	cursor: pointer;
`;

export function DeleteIcon(props) {
	return (
		<Text type='danger'>
			<Delete {...props} />
		</Text>
	);
}
