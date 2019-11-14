import { Form } from 'formik-antd';
import { Button } from 'antd';

import styled from 'styled-components';

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

export const ResetButton = styled(Button).attrs({
	type: 'default',
	htmlType: 'reset',
})`
	margin-bottom: 6px;
`;

export const SubmitButton = styled(Button).attrs({
	htmlType: 'submit',
})``;
