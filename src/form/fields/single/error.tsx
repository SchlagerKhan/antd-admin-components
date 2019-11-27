import React from 'react';

import styled from 'styled-components';

import { Typography } from 'antd';

interface ErrorProps {
	error: string;
}

const Text = styled(Typography.Text).attrs({
	type: 'danger',
})``;

export function Error(props: ErrorProps) {
	const { error } = props;

	return error ? <Text>{error}</Text> : null;
}
