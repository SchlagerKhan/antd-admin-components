import React from 'react';

import styled from 'styled-components';

import { renderAuth } from './helpers.story';

const Wrapper = styled.PageWrapper``;

export function AuthPage() {
	return <Wrapper>{renderAuth()}</Wrapper>;
}
