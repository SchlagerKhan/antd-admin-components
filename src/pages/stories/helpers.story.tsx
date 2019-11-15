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

function onLogin(values) {
	console.log('Login', values);
}

function onRegister(values) {
	console.log('Register', values);
}

export const Auth = () => <AuthPage title='Test title' onLogin={onLogin} onRegister={onRegister} />;
export const App = () => <AppPage items={CONTENT_ITEMS} />;
