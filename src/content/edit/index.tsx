import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { EditContentForm, EditContentFormProps } from './form';
import { EditContentOverview, EditContentOverviewProps } from './overview';

export * from './overview';
export * from './form';

export interface EditContentProps {
	root: EditContentOverviewProps['root'];
	overview: Omit<EditContentOverviewProps, 'root'>;
	form: EditContentFormProps;
}

export function EditContent(props: EditContentProps) {
	const { root, overview, form } = props;

	return (
		<Switch>
			<Route exact path={`${root}/:alias`}>
				<EditContentForm {...form} />
			</Route>
			<Route exact path={root}>
				<EditContentOverview root={root} {...overview} />
			</Route>
		</Switch>
	);
}
