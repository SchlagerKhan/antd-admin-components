import 'antd/dist/antd.css';

import styled from 'styled-components';

import { Button } from 'antd';

styled.SB = {
	Wrapper: styled.div`
		padding: 16px;
	`,
	Item: styled.div`
		margin-bottom: 16px;
	`,
	Title: styled.h1``,
};

Button.defaultProps = {
	type: 'primary',
};

const keys = Object.keys(styled.SB);
keys.forEach((key) => {
	styled[key] = styled(styled.SB[key]);
});
