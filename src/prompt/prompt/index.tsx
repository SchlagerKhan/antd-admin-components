import { noop } from 'lodash';

import { PromptOpts, PromptProps } from './types';
import { createDiv, destroyDiv, renderDiv } from './helpers';

export * from './types';

export function prompt(opts: PromptOpts) {
	return new Promise((resolve) => {
		const div = createDiv();

		const { title, content, onOk = noop } = opts;
		let promptProps: PromptProps = {
			title,
			content,
			handleOk,
			handleCancel,
		};

		async function handleOk() {
			await onOk();

			destroyDiv(div);
			resolve(true);
		}

		function handleCancel() {
			destroyDiv(div);
			resolve(false);
		}

		renderDiv(div, promptProps);
	});
}
