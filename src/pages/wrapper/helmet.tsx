import React from 'react';
import { Helmet } from 'react-helmet';

import { AdminProps } from './types';

function renderFavicons(props: AdminProps) {
	const { favicons } = props;

	if (!favicons) {
		return null;
	}

	return (
		<>
			<link rel='icon' type='image/png' sizes='32x32' href={favicons['32x32']} />
			<link rel='icon' type='image/png' sizes='16x16' href={favicons['16x16']} />
		</>
	);
}

export function renderHelmet(props: AdminProps) {
	const { title } = props;

	return (
		<Helmet>
			<meta charSet='utf-8' />

			<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />
			<meta name='theme-color' content='white' />

			{renderFavicons(props)}

			<title>{title}</title>
		</Helmet>
	);
}
