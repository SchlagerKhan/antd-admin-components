import React from 'react';

import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';

import { Layout, Content, Header, Menu, MenuItem } from './index';

const ITEMS: MenuItem[] = [
	{
		path: '/',
		title: 'Home',
		icon: 'home',
	},
	{
		path: '/page',
		title: 'Page',
		icon: 'home',
		items: [
			{
				path: '/page/sub',
				title: 'Subpage',
				icon: 'home',
			},
			{
				path: '/iframe.html',
				title: 'Selected',
				icon: 'home',
			},
		],
	},
];

const Wrapper = styled.PageWrapper``;

const OuterLayout = styled(Layout)`
	border: 1px solid lightgray;
`;

export function PageLayout() {
	return (
		<Wrapper>
			<OuterLayout>
				<Header>Header</Header>
				<Layout>
					<Menu items={ITEMS} />
					<Content>
						<Switch>
							<Route path='/'>Home</Route>
							<Route path='/path'>Path</Route>
						</Switch>
					</Content>
				</Layout>
			</OuterLayout>
		</Wrapper>
	);
}

export default { title: 'Layout' };
