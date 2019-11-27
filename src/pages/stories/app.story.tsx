import React from 'react';

import styled from 'styled-components';

import { renderApp } from './helpers.story';

const Wrapper = styled.PageWrapper``;

export function AppPage() {
	return <Wrapper>{renderApp()}</Wrapper>;
}
