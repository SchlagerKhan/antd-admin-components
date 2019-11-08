import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { LoginForm } from '../login';
import { RegisterForm } from '../register';
import { ToggleButton } from '../helpers';

const FormWrapper = styled.div`
	margin-bottom: 12px;
`;

function renderForm(isLogin, props) {
	const { onLogin, onRegister } = props;

	// prettier-ignore
	return isLogin 
		? <LoginForm title='Login' onLogin={onLogin} /> 
		: <RegisterForm title='Register' onRegister={onRegister} />;
}

export function AuthForm(props) {
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

AuthForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRegister: PropTypes.func.isRequired,
};
