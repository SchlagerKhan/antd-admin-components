import React from 'react';
import ReactDOM from 'react-dom';

import { Prompt } from './prompt';
import { PromptProps } from './types';

export function createDiv() {
	const div = document.createElement('div');

	document.body.appendChild(div);

	return div;
}

export function destroyDiv(div) {
	const unmountResult = ReactDOM.unmountComponentAtNode(div);

	if (unmountResult && div.parentNode) {
		div.parentNode.removeChild(div);
	}
}

export function renderDiv(div, props: PromptProps) {
	ReactDOM.render(<Prompt {...props} />, div);
}
