import { AuthPageProps } from '../auth';
import { AppPageProps } from '../app';

export interface AdminProps {
	title: string;
	favicons?: {
		'16x16': string;
		'32x32': string;
	};

	isLoading: boolean;

	authProps?: AuthPageProps;
	renderAuth?: (props: AdminProps) => JSX.Element;

	appProps?: AppPageProps;
	renderApp?: (props: AdminProps) => JSX.Element;
}
