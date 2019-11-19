import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { Layout, Menu as AntMenu, Icon } from 'antd';

const { Item, SubMenu } = AntMenu;

/* TYPES */
interface MenuSubItem {
	path: string;
	title: string;
	icon: string;
	disabled?: boolean;
	exact?: boolean;
}

export interface MenuItem extends MenuSubItem {
	items?: MenuSubItem[];
}

interface MenuProps {
	items: MenuItem[];
}

/* COMPONENTS */
const Sider = styled(Layout.Sider)``;

const MenuWrapper = styled(AntMenu)`
	height: 100%;
`;

/* HELPERS */
function getSelectedKeys(items: MenuItem[], path) {
	return items
		.map((item) => [item, item.items])
		.flat(2)
		.filter((i) => i)
		.map((item) => item.path)
		.filter((p) => p === path);
}

/* RENDERING */
function renderTitle(item: MenuItem) {
	const { title, icon } = item;

	return (
		<>
			<Icon type={icon} />
			<span>{title}</span>
		</>
	);
}

function renderSubmenu(subItems: MenuItem[], parentItem: MenuItem) {
	const { path } = parentItem;
	const title = renderTitle(parentItem);

	return (
		<SubMenu key={path} {...parentItem} title={title}>
			{subItems.map(renderItem)}
		</SubMenu>
	);
}

function renderItem(item: MenuItem) {
	const { path, disabled, items } = item;

	if (items) {
		return renderSubmenu(items, item);
	}

	return (
		<Item key={path} disabled={disabled}>
			<Link to={path}>{renderTitle(item)}</Link>
		</Item>
	);
}

export function Menu(props: MenuProps) {
	const { items } = props;
	const { pathname } = useLocation();

	const selectedKeys = getSelectedKeys(items, pathname);
	const defaultOpenKeys = items.map((item) => item.path);

	const menuProps = {
		theme: 'light',
		mode: 'inline',
		defaultOpenKeys,
		selectedKeys,
	};

	// prettier-ignore
	return (
		<Sider>
			<MenuWrapper {...menuProps}>
				{items.map(renderItem)}
			</MenuWrapper>
		</Sider>
	);
}
