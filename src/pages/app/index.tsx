import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout, Header, Menu, Content, MenuItem } from '../../layout';

export interface PageItem extends MenuItem {
	items?: PageItem[];
	component?: any;
}

type PageItems = PageItem[];

export interface AppPageProps {
	items: PageItems;
	isLoggedIn?: boolean;

	renderHeader?: () => JSX.Element;
	renderMenu?: (items: PageItems) => JSX.Element;
	renderContent?: (routeSwitch: JSX.Element, items: PageItems) => JSX.Element;
	renderRoutes?: (items: PageItems) => JSX.Element;
}

function getRoutes(items: PageItems) {
	return items
		.map((item) => (item.items ? getRoutes(item.items) : item))
		.flat(Infinity)
		.filter((item) => item.component);
}

/* RENDERING */
function defaultRenderHeader() {
	return <p>Header</p>;
}

function defaultRenderMenu(items: PageItems) {
	return <Menu items={items} />;
}

function defaultRenderRoutes(items: PageItems) {
	const routes = getRoutes(items);

	return (
		<Switch>
			{routes.map((route) => (
				<Route key={route.path} {...route} />
			))}
		</Switch>
	);
}

function defaultRenderContent(routeSwitch: JSX.Element) {
	return routeSwitch;
}

export function AppPage(props: AppPageProps) {
	const { items, isLoggedIn, renderHeader, renderMenu, renderContent, renderRoutes } = props;
	const routeSwitch = renderRoutes(items);

	if (isLoggedIn === false) {
		return <Redirect to='/auth' />;
	}

	return (
		// prettier-ignore
		<Layout>
			<Header>{renderHeader()}</Header>
			<Layout>
				{renderMenu(items)}
				<Content>
					{renderContent(routeSwitch, items)}
				</Content>
			</Layout>
		</Layout>
	);
}

AppPage.defaultProps = {
	renderHeader: defaultRenderHeader,
	renderMenu: defaultRenderMenu,
	renderContent: defaultRenderContent,
	renderRoutes: defaultRenderRoutes,
};
