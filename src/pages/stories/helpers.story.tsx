import React from 'react';

import { AuthPage } from '../auth';
import { AppPage, PageItem } from '../app';

export const CONTENT_ITEMS: PageItem[] = [
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

export function onLogin(values) {
	console.log('Login', values);
}

export const renderAuth = () => <AuthPage title='Test title' onLogin={onLogin} />;
export const renderApp = () => <AppPage items={CONTENT_ITEMS} />;
