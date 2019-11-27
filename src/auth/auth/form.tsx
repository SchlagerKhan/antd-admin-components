import React, { useState } from 'react';

import styled from 'styled-components';

import { LoginForm, LoginFormProps } from '../login';
import { RegisterForm, RegisterFormProps } from '../register';
import { ToggleButton } from '../helpers';

export interface AuthFormProps {
	onLogin: LoginFormProps['onLogin'];
	onRegister: RegisterFormProps['onRegister'];
}

const FormWrapper = styled.div`
	margin-bottom: 12px;
`;

function renderForm(isLogin: boolean, props: AuthFormProps) {
	const { onLogin, onRegister } = props;

	// prettier-ignore
	return isLogin
		? <LoginForm title='Login' onLogin={onLogin} />
		: <RegisterForm title='Register' onRegister={onRegister} />;
}

export function AuthForm(props: AuthFormProps) {
	const [isLogin, setIsLogin] = useState(true);

	const form = renderForm(isLogin, props);
	const toggleText = isLogin ? 'Register' : 'Login';
	const toggleMode = () => setIsLogin(!isLogin);

	return (
		<>
			<FormWrapper>{form}</FormWrapper>
			<ToggleButton onClick={toggleMode}>{toggleText}</ToggleButton>
		</>
	);
}
