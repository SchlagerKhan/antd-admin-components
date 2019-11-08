import React from 'react';

import styled from 'styled-components';

import { AppPage as App, PageItem } from './index';

const ITEMS: PageItem[] = [
	{
		path: '/',
		title: 'Home',
		icon: 'home',
		component: () => <p>Home</p>,
	},
	{
		path: '/page',
		title: 'Page',
		icon: 'home',
		component: () => <p>Page</p>,
	},
];

const Wrapper = styled.PageWrapper``;

export function AppPage() {
	return (
		<Wrapper>
			<App items={ITEMS} />
		</Wrapper>
	);
}
