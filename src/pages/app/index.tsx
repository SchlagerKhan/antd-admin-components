import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout, Header, Menu, Content, MenuItem } from '../../layout';

export interface PageItem extends MenuItem {
	component: any;
}

type PageItems = PageItem[];

export interface AppPageProps {
	items: PageItems;
	isLoggedIn?: boolean;

	renderHeader?: () => JSX.Element;
	renderMenu?: (items: PageItems) => JSX.Element;
	renderContent?: (routes: JSX.Element, items: PageItems) => JSX.Element;
	renderRoutes?: (items: PageItems) => JSX.Element;
}

/* RENDERING */
function defaultRenderHeader() {
	return <p>Header</p>;
}

function defaultRenderMenu(items: PageItems) {
	return <Menu items={items} />;
}

function defaultRenderRoutes(items: PageItems) {
	return (
		<Switch>
			{items.map((item) => (
				<Route key={item.path} {...item} />
			))}
		</Switch>
	);
}

function defaultRenderContent(routes: JSX.Element, items: PageItems) {
	return routes;
}

export function AppPage(props: AppPageProps) {
	const { items, isLoggedIn, renderHeader, renderMenu, renderContent, renderRoutes } = props;
	const routes = renderRoutes(items);

	if (isLoggedIn === false) {
		return <Redirect to='/auth' />;
	}

	return (
		<Layout>
			<Header>{renderHeader()}</Header>
			<Layout>
				{renderMenu(items)}
				<Content>{renderContent(routes, items)}</Content>
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
