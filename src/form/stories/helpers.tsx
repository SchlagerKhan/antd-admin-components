import styled from 'styled-components';

import { Button } from 'antd';

export const { Item, Title } = styled.SB;

export const Wrapper = styled.Wrapper`
	width: 400px;
`;

export const SaveButton = styled(Button).attrs({
	htmlType: 'submit',
	children: 'Save',
})``;

export function onSubmit(values) {
	console.log('Submit', values);
}
