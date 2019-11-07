import React from 'react';

import styled from 'styled-components';

import { Typography } from 'antd';

const Text = styled(Typography.Text).attrs({
	type: 'danger',
})``;

export function Error({ error }) {
	const { message } = error;

	return message ? <Text>{message}</Text> : null;
}

Error.defaultProps = {
	error: {},
};
