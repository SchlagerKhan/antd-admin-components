import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Card as AntCard } from 'antd';

import { LoginForm } from '../login';
import { RegisterForm } from '../register';
import { ToggleButton } from '../helpers';

const FormWrapper = styled.div`
	margin-bottom: 12px;
`;

export function AuthForm(props) {
	const { onLogin, onRegister } = props;
	const [isLogin, setIsLogin] = useState(true);

	const title = isLogin ? 'Login' : 'Register';
	const form = isLogin ? <LoginForm title='Login' onLogin={onLogin} /> : <RegisterForm title='Register' onRegister={onRegister} />;

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
