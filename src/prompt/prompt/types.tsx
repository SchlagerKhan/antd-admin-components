export interface BasicPromptOpts {
	title: string;
	onOk?: (...args) => any;
}

export interface PromptOpts extends BasicPromptOpts {
	content: any;
}

export interface PromptProps extends PromptOpts {
	handleOk: () => any;
	handleCancel: () => any;
}
