import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { EditContentForm, EditContentFormProps } from './form';
import { EditContentOverview, EditContentOverviewProps } from './overview';

export * from './overview';
export * from './form';

export interface EditContentProps {
	title?: string;
	rootPath: EditContentOverviewProps['rootPath'];
	overview: Omit<EditContentOverviewProps, 'rootPath'>;
	form: EditContentFormProps;
}

export function EditContent(props: EditContentProps) {
	const { title, rootPath, overview, form } = props;

	return (
		<>
			{title && <h1>{title}</h1>}
			<Switch>
				<Route exact path={`${rootPath}/:alias`}>
					<EditContentForm {...form} />
				</Route>
				<Route exact path={rootPath}>
					<EditContentOverview rootPath={rootPath} {...overview} />
				</Route>
			</Switch>
		</>
	);
}
